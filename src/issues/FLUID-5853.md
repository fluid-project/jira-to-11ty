---json
{
  "title": "FLUID-5853",
  "summary": "Add an export button to the pull down tab of the separate prefers editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2016-02-03T12:26:56.501-0500",
  "updated": "2024-07-23T11:01:19.611-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5837/",
      "key": "FLUID-5837",
      "summary": "Add the new \"GPII preference syncing\" panel"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T11:01:19.611-0400",
      "body": "GPII is no longer supported\n"
    }
  ]
}
---
Currently the separate prefs editor has a pull down tab that can be used to open the preferences editor and also trigger a reset of the preferences. The task here is to additionally add an export button which can be hooked up to the "GPII Prefs Syncing" panel to export the users preferences to GPII. In this first round, only the button will be added. The behaviour will depend on work from FLUID-5837 and other tasks for connecting to GPII.

        