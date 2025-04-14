---json
{
  "title": "FLUID-4364",
  "summary": "Setting the linespacing doesn't work for the Full page UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-07-28T09:17:37.732-0400",
  "updated": "2011-08-04T12:28:29.270-0400",
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
      "author": "Justin Obara",
      "date": "2011-07-28T09:18:04.578-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-04T12:28:29.269-0400",
      "body": "Appears to have been fixed with one of the other recent changes to UIO\n"
    }
  ]
}
---
Steps to reproduce

1\) Open either of the Full page UIO demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>

2\) Change the Line Spacing and save the change\
Notice that the line spacing didn't change.

Note that linespacing works in the preview window, and also for the Fat panel version of UIO.

        