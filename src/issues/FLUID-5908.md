---json
{
  "title": "FLUID-5908",
  "summary": "Failure when adding \"this-ist\" record as event listener",
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
  "date": "2016-05-19T15:28:12.921-0400",
  "updated": "2024-07-22T09:25:32.639-0400",
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
      "author": "Antranig Basman",
      "date": "2016-05-19T15:45:34.236-0400",
      "body": "Note that this bug was not observed earlier (since we do have several test cases for this-ist records, both invokers and listeners, in FluidIoCTests.js) is that it depends on the special-case resolution in fluid.event.resolveListenerRecord which reads\n\n```java\nexpanded.listener = (standard && (expanded.args && listener !== \"fluid.notImplemented\" || firer)) ? fluid.event.dispatchListener(that, listener, eventName, expanded) : listener;\n```\n\nSo any listener record which has arguments is wrapped by the fluid.event.dispatchListener process and so hides the \"strange applicable record\" from event.addListener.\n"
    }
  ]
}
---
The following perfectly harmless construction, encountered in the GPII OAuth 2 server's "selection tree", fails after the implementation of <https://fluidproject.atlassian.net/browse/FLUID-5695#icft=FLUID-5695> was merged in:

```java
listeners: {
....
            "onDestroy.emptyContainer": {
                "this": "{that}.container",
                method: "empty"
            }
```

The framework has succeeded in confusing itself by multiplexing the "types" of listeners - `fluid.thisistToApplicable` creates funny records of type Object with a function member named `apply` in order to quickly tunnel through the various dispatch pathways of the framework. The new "signature" to `Event.addListener` simply detects its arguments via fluid.isPlainObject and mistakes these for attempts to address its "options-based API". A language with a type system would save us from such blunders, but then it would curse us in other ways.

        