---json
{
  "title": "FLUID-5546",
  "summary": "Framework fails to deregister listeners to events which are injected from other components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-11-06T07:25:25.903-0500",
  "updated": "2015-08-20T19:42:09.882-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T19:42:09.882-0400",
      "body": "pull <https://github.com/fluid-project/infusion/pull/602> is attached to this issue\n"
    }
  ]
}
---
As part of a faulty optimisation introduced when fixing the implementation of <https://fluidproject.atlassian.net/browse/FLUID-5268#icft=FLUID-5268>, we now fail to deregister all listeners which are registered via IoC onto a component's own (apparent) events. This is faulty in the case where the event has been injected from another (longer-scoped) component - the listener from the shorter-scoped component then fires, giving a "resolving from destroyed component failure". This was uncovered as part of the MatchMaker framework updates to the GPII - the failure was in UpdateTests.js  - a transcript of the failure can be found at

<http://pastebin.com/THn4T8Dk>

The situation setup was: a parent grade of a request component (in this case gpii.request.flowManager.token of the UserLogin request component) both injected an event from a parent component

fluid.defaults("gpii.request.flowManager.token", {\
gradeNames: \["fluid.eventedComponent", "autoInit"],\
...\
events: {\
...\
onMatch: "{gpii.matchMakerFramework}.events.onMatch",

});

whilst a derived grade (gpii.request.flowManager.token) then attached a local listener to it:

fluid.defaults("kettle.requests.request.handler.userLogin", {\
gradeNames: \["fluid.littleComponent", "gpii.request.flowManager.token", "autoInit"],\
listeners: {\
onMatch: "{that}.runContextManager",

The diagnostic received from the framework in this case was:

23:28:00.038:  ASSERTION FAILED: Cannot resolve reference {arguments}.0 from component { typeName: "kettle.requests.request.handler" gradeNames: \["kettle.requests.request.handler.userLogin","gpii.request.flowManager.token","kettle.requests.request.handler","{request}.handlerContext","fluid.applyGradeLinkage"] id: 55ae4v1y-627} which has been destroyed\
23:28:00.038:  Current activity:\
while resolving context value {arguments}.0\
while expanding context value {arguments}.0 held at path ""\
while firing to listener to event named onMatch of component {

This is partially helpful (since at least the scoping error is flagged up) but somewhat misleading since the argument specification {arguments}.0 does not appear anywhere in user code - in fact it is synthesized by the framework automatically given the "blind" (arg-less) listener definition "{that}.runContextManager" which acts by simply passing through any arguments supplied by the caller.

As well as correcting this error, we also need to make sure that the framework does not attempt to destroy such injected events when the shorter-scoped component is destroyed (it might not since they might be injected as proxies)

        