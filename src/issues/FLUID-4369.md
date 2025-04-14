---json
{
  "title": "FLUID-4369",
  "summary": "The various contrast modes set a dotted bottom border under all the headers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-07-28T13:10:36.870-0400",
  "updated": "2013-04-11T16:34:43.941-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4369/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:12:16.346-0400",
      "body": "ScreenShot.png shows the dotted bottom border below the headers\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:12:24.462-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-29T13:42:31.376-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/125>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-29T15:25:58.903-0400",
      "body": "Merged into project repo at 18d398977029a2af2966207701e874935fa4acf8\n"
    }
  ]
}
---
The various contrast themes all set a dotted bottom border below the headers, which shouldn't be there.

Steps to reproduce

1\) Open any of UIO demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Change the "Colour & Contrast" option and save the change.\
Notice that all of the headers have a dotted bottom border.

        