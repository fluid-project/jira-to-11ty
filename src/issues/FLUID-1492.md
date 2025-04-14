---json
{
  "title": "FLUID-1492",
  "summary": "Sortable jQuery tabs avatar is not styled correctly",
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
  "date": "2008-09-09T10:15:05.000-0400",
  "updated": "2008-09-11T09:47:28.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1492/FLUID-1492.patch",
      "filename": "FLUID-1492.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1492/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1492/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-09T10:16:00.000-0400",
      "body": "'screenshot-1' shows the avatar displayed as a link in a bulleted list\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T10:16:59.000-0400",
      "body": "'screenshot-2' shows the avatar without the bullet in IE\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T09:47:28.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Sortable jQuery tabs avatar is not styled correctly

The avatar is displayed as a link (in browsers other than IE, it is displayed with a bullet in front)

Steps to reproduce:

1\) Open the Sortable jQuery Tabs example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) Drag one of the tabs. Notice that the avatar is not styled correctly.

        