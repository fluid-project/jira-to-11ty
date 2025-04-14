---json
{
  "title": "FLUID-5584",
  "summary": "Improve promise semantics to allow promises cooperating in a sequence to contribute diagnostics on rejection",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-01-09T09:38:01.205-0500",
  "updated": "2024-07-22T09:32:45.910-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-04-30T10:45:49.815-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/578> ) into the project repo at 6bc2d84f7667dd2298efe696c105c404f9b08dc5\n"
    }
  ]
}
---
Native promise semantics do not allow for diagnostics of the same quality that were obtainable under the synchronous exception-handling model. A "best practice" for an inhabitant of an intermediate stack frame where an exception passes through is the "catch, annotate and rethrow" model where the intermediate handler can contribute extra information about the activity in progress when the exception is thrown. Discussion from mature heads dating from these earlier years can be found at <http://www.mindview.net/Etc/Discussions/CheckedExceptions/> and was enshrined in the "prior art" of RSF's "UniversalRuntimeException" - <http://rsf.fluidproject.org/wiki/Wiki.jsp?page=UniversalRuntimeException>

The core Infusion framework uses a similar technique known as the "activity stack" in order to allow the framework's situation to be understood. However, none of these techniques generalise straightforwardly to values passed amongst promise chains - the code backing a "resolve" earlier in the chain has long vanished from the stack by the time a "reject" is received later - especially if one is following the newer promise semantic whereby every promise handler resolves asynchronously.

Kids who promote promises follow the practice that the "original rejection reason" is simply propagated unchanged through a compound promise to the original caller. By the time anyone is troubled by their unintelligible diagnostic, they will have moved on to work on different projects using different libraries. We need to provide a new scheme that allows for meaningful accretion of contextual information as a "reject" starts to propagate out to the caller.

Interestingly, it seems that this can't be tackled without the concept of "standard promise algorithms" - since without some prearranged geometry connecting the promises, there is no natural concept of "original cause". Such a standard geometry is established by our "fluid.promise.sequence" family of algorithms - resolution proceeds through an array of promises or promises sources ("tasks") stored in an array from left to right. If a promise to the right of a successfully resolved "cause promise" in the array rejects, the cause promise has to be considered to have participated in the cause of the failure. What should then happen is that resolution then returns back through the array from right to left, with each cause being polled to see if it is interested in contributing contextual information to the failure.

The real-life use-case prompting this feature request is written up in KETTLE-31 - here we have a transforming chain of promises/tasks operating an "accumulate" or "reduce" algorithm - the resolved value of each successful task is handed as the input argument to the task to its right. In this case, the left-most task reads some data from a file, and yields the value as a string to "resolve". The next task attempts to parse this string as JSON. In the case that the string doesn't parse, this task rejects. Without the ability to gain context from the file-reading task, we can't report WHICH file was being read when the failure occurs.

Draft API proposal - a "task" (promise or function returning a promise) is permitted to "annotate" the resolved promise by fabricating an extra method on it - proposed name "accumulateRejectReason". This function accepts the rejection reason of a promise to its right, and returns a rejection reason with more context accumulated. We may as well standardise on these reasons holding a string field named "message" holding the accumulating diagnostic, and a field named "error" holding any exception/Error which was associated with the failure (this is optional and could be fabricated automatically by the promise.reject framework impl simply using new Error()). If this extra method is not available, the default semantics of propagating the original rejection reason object are operated.

Since fluid.promise.sequence has been implemented using the "skeleton + strategy" implementation technique, we can easily extend this improved semantic to all of this family of algorithms without disturbing their code paths.

        