---json
{
  "title": "FLUID-6456",
  "summary": "Infusion erroneously expands ${} style EL references in arbitrary configuration",
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
  "date": "2020-02-12T13:07:35.502-0500",
  "updated": "2020-02-14T09:38:00.064-0500",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-02-13T08:12:05.689-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/978> ) into the project repo at c3c22dc4c3a3683280989534bb5f03f8d90d1bf9\n"
    }
  ]
}
---
@@Tony Atkins \[RtF] found when working on the GPII's Live Solutions Registry that configuration of the form "${{session}.preferences}" was being expanded when occurring as free-form component options. This occurs in the solutions registry in sections such as

```java
"launchHandlers": {
    "launch": {
        "type": "gpii.settingsHandlers.exploding",
        "options": {
            "launchHandler": true,
            "preferences": "${{session}.preferences}"
        }
    }
}
```

 

This support is a holdover from the ancient days of the "old renderer" and was never intended to be active in ordinary component options.

It seems that it has been gradually automatically disabled as we moved non-freestanding expansion over to the higher-performance "expandImmediate" system, but this pathway has been left behind for options directly attached to the component, as part of the ancient default "ELstyle: ${}" configuration supplied via fluid.generateExpandBlock.

        