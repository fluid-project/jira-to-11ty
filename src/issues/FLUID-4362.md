---json
{
  "title": "FLUID-4362",
  "summary": "Inputs/Icons don't line up with their labels when text size is increased",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "Justin Obara",
  "date": "2011-07-28T09:06:13.202-0400",
  "updated": "2011-09-12T15:30:35.721-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4363/",
      "key": "FLUID-4363"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4362/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T09:07:54.239-0400",
      "body": "ScreenShot.png shows the misaligned Inputs/Icons when the text size is large\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T09:18:59.543-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-02T11:18:04.615-0400",
      "body": "This seems to be ok in the with preview version but still broken for without preview.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-09-02T12:05:22.312-0400",
      "body": "Both versions now looks off when viewed just as default\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-09-06T13:45:36.385-0400",
      "body": "Pull request sent\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-12T15:27:14.932-0400",
      "body": "Merged Heidi's pull request <https://github.com/fluid-project/infusion/pull/148> into the projet repo at 591805538042a922667f3c88a259b19b1eef763b\n"
    }
  ]
}
---
Steps to reproduce

1\) Open either one of the Full page UIO demos\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>

2\) Increase the text size\
Notice that the Inputs and Icons no longer line up correctly with their labels

        