---json
{
  "title": "FLUID-2607",
  "summary": "Tabs are split between the left edge and middle of the screen in simplified layout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-04-17T09:57:36.000-0400",
  "updated": "2013-10-04T11:11:24.636-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2607/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-17T09:58:51.000-0400",
      "body": "'screenshot-1' shows teh disjointed tabs in simple layout\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:05:17.990-0400",
      "body": "Simplified layout is no longer offered by UIO.\n"
    }
  ]
}
---
Tabs are split between the left edge and middle of the screen in simplified layout

Steps to reproduce:

1\) Open the sakai mock-up example

2\) change to the simplified layout, save changes, and close the dialog

Notice that the tabs in the middle of the screen appear centred, except their left edge is at the left edge of the screen.

        