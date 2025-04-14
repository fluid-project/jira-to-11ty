---json
{
  "title": "FLUID-5611",
  "summary": "Framework should issue a diagnostic and failure if ginger process causes firing of any events before options merging is complete",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-03-31T14:00:33.921-0400",
  "updated": "2024-07-22T10:35:25.284-0400",
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
      "date": "2019-08-01T09:29:00.177-0400",
      "body": "In the new, post <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> framework such a condition is not an error and indeed highly likely. Also, the various issues referred to in the report relating to asynchronously loaded resources are resolved by the new ResourceLoader architecture\n"
    }
  ]
}
---
This was observed in debugging a problem with the SeparatedPanelPrefsEditor - in a branch for <https://fluidproject.atlassian.net/browse/FLUID-5597#icft=FLUID-5597>, the following reference had been added to the grade definition:

```java
fluid.defaults("fluid.prefs.separatedPanel", {
        gradeNames: ["fluid.prefs.prefsEditorLoader", "autoInit"],
....
        messageBase: "{messageLoader}.resources.prefsEditor", // ERROR here
```

This attempted to reference a resource which should only be available asynchronously - one of the bundles loaded by the messageLoader. The relevant configuration for prefsEditorLoader is:

```java
fluid.defaults("fluid.prefs.prefsEditorLoader", {
        gradeNames: ["fluid.viewRelayComponent", "autoInit"],

            messageLoader: {
                type: "fluid.prefs.resourceLoader",
                options: {
                    resourceOptions: {
                        dataType: "json"
                    },
                    events: {
                        onResourcesLoaded: "{prefsEditorLoader}.events.onPrefsEditorMessagesLoaded"
                    }
                }
            }
        events: {
            onPrefsEditorTemplatesLoaded: null,
            onPrefsEditorMessagesLoaded: null,
            onCreatePrefsEditorReady: {
                events: {
                    templateLoaded: "onPrefsEditorTemplatesLoaded",
                    messagesLoaded: "onPrefsEditorMessagesLoaded"
                }
            }
        },
```

What was observed was that the "onResourcesLoaded" event fired, but the onPrefsEditorMessagesLoaded event which in theory was identical with it did not fire. The reason was that this firing was triggered synchronously as a result of resources which loaded from the cache, before the options merging process for separatedPanel had completed and any of the listeners attached to this event could be evaluated.

The original reference was impossible, but the framework should give more comprehensible behaviour in this case. In particular, any event which is triggered for a component during its own options evaluation process must certainly be considered an error, and the framework should halt at that point.

If we do decide to support this behaviour, another possibility would be to schedule events/listener merging earlier in the process than general options evaluation, but this still seems very likely to leave cases of unexpected and indeterminate behaviour.

        