---json
{
  "title": "FLUID-3642",
  "summary": "Turn off debug mode for the Infusion 1.2 release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-04-13T13:41:56.000-0400",
  "updated": "2011-01-14T10:37:17.423-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-13T14:00:39.000-0400",
      "body": "commented out the fluid.fail message\n\nDidn't find any debugging statements that needed to be turned off.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:23.460-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Update fluid.fail() to throw an error, turn off debug mode for the renderer, etc.

        