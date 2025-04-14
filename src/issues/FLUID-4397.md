---json
{
  "title": "FLUID-4397",
  "summary": "UIOptions Fat panel will jump/flicker on initialisation as a blank area occupying the drop-down panel is shown and hidden",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-08-10T16:05:11.317-0400",
  "updated": "2024-07-22T09:40:59.676-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-25T10:28:05.579-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/137> merged into project repo at 4018514d2d1fa9d235178ff8ea89d4a3c10f2466\n"
    }
  ]
}
---
This was apparently due to a requirement to perform some CSS measurements whilst the panel is visible. We need to make sure we can prevent this behaviour somehow since it is very distracting.

        