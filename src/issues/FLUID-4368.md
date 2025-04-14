---json
{
  "title": "FLUID-4368",
  "summary": "Some background images are still present in the Preview after applying a contrast theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Mike Lam",
  "reporter": "Justin Obara",
  "date": "2011-07-28T13:01:37.820-0400",
  "updated": "2013-10-04T09:58:39.828-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4454/",
      "key": "FLUID-4454"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4368/ScreenShot.png",
      "filename": "ScreenShot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4368/screenshot2.png",
      "filename": "screenshot2.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:03:39.638-0400",
      "body": "ScreenShot.png shows the background images in the preview window with the \"White on Black\" theme active.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T13:03:55.632-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-04-30T10:22:56.551-0400",
      "body": "\"screenshot2.png\" shows the same issue in the full with preview manual test. Note that it only happens when enable the table of contents and a contrast theme.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-04T09:58:39.665-0400",
      "body": "Don't have background images in the preview window\n"
    }
  ]
}
---
UI Options does not remove all background images anymore, so there are still a couple showing up in the preview window. UI Options itself uses theme specific background images to show icons next to the sliders, so we can't just remove all background images as we had in the past.&#x20;

Steps to reproduce

1\) Open the Full with Preview UIO demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>

2\) Change the "Colour & Contrast" option and save the changes\
Notice that there are a couple of background images still present in the preview.

        