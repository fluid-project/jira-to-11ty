---json
{
  "title": "FLUID-5213",
  "summary": "Make auxBuilder pass down conditional common options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-11-19T09:00:51.062-0500",
  "updated": "2014-03-03T11:26:09.380-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-11-25T03:22:17.686-0500",
      "body": "Thanks for this improved explanation, Cindy - to me the issue still isn't very clear. For Case 1, in what situation might the option not be required?\\\nAnd for case 2, what is required here that can't be done simply by contributing directly to the mergePolicy option directly? That is, why not just accept an entire mergePolicy rather than the specially named \"mergeFunc\"?\n\nCan we see examples in the prefs editor code written by our users where these two facilities are required?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-11-26T03:45:57.007-0500",
      "body": "Hi Cindy - thanks for updates to the implementation and continued explanation. Case 1 still strikes me as a \"white elephant generalisation\" - despite being generalised to handle \"values in general\", I'm still not convinced that this use case requires such complex machinery, or even any user-supplied configuration at all. Would it not be sufficient to just detect if the required enactor grade is a viewComponent and only supply the container in that case? Every piece of configuration we expose to this class of user (integrators) has a very high cost, especially if it requires them to write special global functions and configuration which doesn't match that seen elsewhere in the framework. If we can remove the requirement for this case to require special configuration, it would be highly desirable - the same goes for case 2.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2013-11-28T15:49:21.059-0500",
      "body": "Thanks for these comments.&#x20;\n\nThe implementation has been simplified. The \"powerful\" optionRequired and mergeFunc are removed. All these checking now are performed directly in fluid.prefs.addCommonOptions().\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-01-16T11:30:49.855-0500",
      "body": "Pull request for this issue: <https://github.com/fluid-project/infusion/pull/438>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-02-11T05:43:11.281-0500",
      "body": "Merged into trunk at revision a6cd793605564887e948143c20718efe53e47bed\n"
    }
  ]
}
---
We have two use cases that require the auxiliary builder to be able to pass down common options in certain conditions.

Case 1: If an enactor is not a view component, meaning an enactor doesn't need to perform DOM related manipulation, the integrator should not have to supply a container. . An actual use case is, when "speak text" preference is turned on, start the screen reader.\
Solution: Implement an "optionRequired" that points to an user-defined function. This function returns true or false to determine if the given value should be used at the path. Example:\
"container": {\
"value": "{uiEnhancer}.container",\
"optionRequired": "fluid.prefs.containerNeeded"\
}

If fluid.prefs.containerNeeded() returns true, the common option:\
container: "{uiEnhancer}.container"\
would be used. Otherwise, nothing would be applied.

Case 2: The defined common option value needs to be merged with the value passed in from the auxiliary schema, such as gradeNames for panels.\
Solution: Implemented a "mergeFunc" option that is interpreted to the framework built-in mergePolicy. It also means the value provided to "mergeFunc" complies with the spec of using mergePolicy. Example:\
"options.gradeNames": {\
"value" : "fluid.prefs.prefsEditorConnections",\
"mergeFunc": fluid.arrayConcatPolicy\
}

This common option\
"options.gradeNames": "fluid.prefs.prefsEditorConnections"\
would be merged with "options.gradeNames" supplied from the aux schema using mergePolicy {"options.gradeNames": fluid.arrayConcatPolicy}

        