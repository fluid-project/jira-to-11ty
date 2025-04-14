---json
{
  "title": "FLUID-2319",
  "summary": "Close button not labelled",
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
  "date": "2009-03-09T09:02:40.000-0400",
  "updated": "2009-03-12T09:02:58.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2319/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-09T09:03:22.000-0400",
      "body": "'screenshot-1' shows that the close button apears to be an empty box\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-10T11:40:02.000-0400",
      "body": "Made dialog more like widget, so close button should behave better\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T09:02:58.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Close button not labelled

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Click on "Edit Appearance" to open the UI Options dialog

Notice that the close button in the top right hand corner appears empty

        