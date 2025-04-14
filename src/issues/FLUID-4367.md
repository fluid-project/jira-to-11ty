---json
{
  "title": "FLUID-4367",
  "summary": "The borders in the Full page UIO don't change colour with contrasts.",
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
  "date": "2011-07-28T12:54:41.719-0400",
  "updated": "2013-04-11T16:36:04.880-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4367/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T12:57:53.505-0400",
      "body": "ScreenShot.png shows an example of the borders not changing colour with the selected contrast theme. Note that in this image they should have been black.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T12:58:01.581-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-29T15:10:06.468-0400",
      "body": "Sent a pull request <https://github.com/fluid-project/infusion/pull/126>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-29T16:55:43.353-0400",
      "body": "pull request merged into project repo at b382be11bb6e6239fc4756576bf7836f0a8b6858\n"
    }
  ]
}
---
The borders around the preview window and those used to separate the sections don't change colour with the contrast changes.

Steps to reproduce

1\) Open either of the Full page UIO demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>

2\) Change the "Colour & Contrast" option and save the changes\
Notice that the section separators don't change colour and can become quite hard to see in certain contrast modes.

        