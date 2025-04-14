---json
{
  "title": "FLUID-5097",
  "summary": "FSS themes in UIO clobbers custom icon font styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2013-07-19T09:35:33.635-0400",
  "updated": "2015-06-26T09:54:58.698-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "FSS",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.257-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:46.173-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
In the Discovery Tool, icon font styling gets clobbered by the !important rule applied to a theme's font-family, color, and background-color. This requires Discovery Tool to add !important rules to relevant icon font sections to get the desired appearance.

The issue here is that the usage of !important in the FSS theme makes it difficult for web designers to use icon fonts.

        