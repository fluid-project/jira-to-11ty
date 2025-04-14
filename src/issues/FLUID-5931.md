---json
{
  "title": "FLUID-5931",
  "summary": "afterDestroy event fires too soon",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-07-20T10:00:16.741-0400",
  "updated": "2016-10-20T13:31:52.990-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-08-02T19:08:15.309-0400",
      "body": "This was a more awkward issue than expected. In practice, there has been a bit of \"magic\"/sloppiness which allowed IoC-resolved arguments to an \"afterDestroy\" listener to resolve at all - which in theory should not have been possible given the component has been destroyed. There were some guards within fluid.expander.fetch which attempted to prevent this but they were not tripped in many cases.\n\nThere were a few possibilities for resolving this. Firstly, the action of reconstructing the component could have been deferred - by some magic mechanism spotting that the component in the current position was in a new lifecycleStatus \"destroyed\" and thus queuing up the recreation \"asynchronously\". Secondly, we could have split the action of resolving an \"afterDestroy\" listener - that is, resolve all IoC references within the listener first, then honour the destruction, then actually invoke the listener.\n\nBoth of these methods would have done too much violence to the framework implementation. There is simply too much reliance on the fact that IoC references are resolved \"on the spot\" - within the implementation of the relevant invoker/listener, and it's hard to think of a performant way of doing anything about this. Either we duplicate the code at each of these sites, or else create a garbage function handle on each invocation. The first method relies on a framework \"scheduler\" and creates too much of a precedent for <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982> behavior before the fact.\n\nIn practice we fudged the issue somewhat, and carefully scheduled the destruction of some framework records (the actual member of \"that\" and records in pathToComponent) BEFORE afterDestroy, and some others (the actual shadow record in idToShadow) AFTERWARDS. This means that normal IoC resolution (with some tweaking, to defeat the ginger process as during mature life) can proceed for these arguments, at the same time as the component's member slot in its parent already being vacated ready for a possible reconstruction.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-20T13:31:46.220-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/730> has been merged into the master branch at 2ae5da176294899a2c73b333aa27bdefeaa33b80\n"
    }
  ]
}
---
The framework's "afterDestroy" event should only fire after **all** user-visible effects accompanying a component's destruction have completed. In the current body of fluid.clearComponent there are several crucial effects which occur after this point -&#x20;

i) The deletion of the shadow\
ii) Tidying up the component' IoC resolution scope\
iii) Removing the component from pathToComponent records\
iv) Actually detaching the component from its parent

Of these, iii) and iv) are fatally mistimed. The workflow we would like is to be able to fire the createOnEvent event for a component from its afterDestroy listener in order to recreate it. This emerged from the work on GPII-580 where we destroy a server from within one of its settingsHandlers. In the following configuration:

```java
}, {
                func: "{loginRequest}.send"
            }, { // As a result of the exploding settings handler, the attempt to login will destroy the server
                event: "{configuration}.server.events.afterDestroy",
                listener: "gpii.tests.journal.logDestroyed",
                args: "{loginRequest}"
            },
            kettle.test.startServerSequence
```

the startServerSequence if entered synchronously will try to reconstruct the server component - unfortunately it will trigger a fresh "clearComponent" for it whilst the existing one is still in progress since it has not yet been cleared from its parent (iv) during either onDestroy or afterDestroy

        