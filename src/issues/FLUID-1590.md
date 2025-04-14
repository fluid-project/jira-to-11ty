---json
{
  "title": "FLUID-1590",
  "summary": "Springboards: No locked portlet error message",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-09-18T17:02:53.000-0400",
  "updated": "2011-01-14T09:53:24.458-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1590/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-18T17:03:49.000-0400",
      "body": "'screenshot-1' shows that there is no error message when attempting to place a movable portlet above a locked one\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T10:36:47.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Springboards: No locked portlet error message

Steps to reproduce:

1\) Open the layout customizer springboard from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/LayoutCustomizer.html>

2\) Attempt to place a draggable portlet above a locked portlet.

Notice that there is no error message informing the user that you can't place a portlet above a locked portlet.

        