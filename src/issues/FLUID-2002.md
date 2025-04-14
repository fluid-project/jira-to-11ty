---json
{
  "title": "FLUID-2002",
  "summary": "All elements should justify to the same side when in simple layout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-12-17T10:52:30.000-0500",
  "updated": "2009-01-05T11:08:57.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2002/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T10:53:22.000-0500",
      "body": "'screenshot-1' shows the image justified to the right instead of to the left, like the other elements\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-19T13:31:47.000-0500",
      "body": "Re-inserted float removal during linearization.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-05T11:08:57.000-0500",
      "body": "Verified fix using:\n\nFF2, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
All elements should justify to the same side when in simple layout

Steps to reproduce:

1\) Open the UI Options example:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Change to the simple layout

Notice that all the elements except for the image in the preview, justify to the left

        