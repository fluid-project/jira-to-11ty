---json
{
  "title": "FLUID-4412",
  "summary": "Reset all does not show in the demo portal",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2011-08-31T10:14:53.655-0400",
  "updated": "2013-04-15T15:28:54.887-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4412/uioDemoMissingReset.png",
      "filename": "uioDemoMissingReset.png"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-31T10:16:58.256-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-09-02T13:14:05.020-0400",
      "body": "The link is still there, but the width of the UIO iframe is being mis-calculated. I think there's some iframe-within-an-iframe weirdness happening - UIO panel is setting itself to width:100% which might be the width of demo.html page instead of the frame it's in.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-06T11:45:23.568-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/154> merged into project repo at 9d12be2b946d60a97456bb4eecbdad425a0c4ed3\n"
    }
  ]
}
---
When viewing the UIOptions demo inside the demo portal the 'reset all' link is missing.&#x20;

        