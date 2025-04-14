---json
{
  "title": "FLUID-2216",
  "summary": "UI Options accordion is not displaying/hiding properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-10T09:19:57.000-0500",
  "updated": "2009-02-11T11:25:17.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2216/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-10T09:20:40.000-0500",
      "body": "'screenshot-1' shows that \"Easier to see\" doesn't completely collapse when \"Easier to find\" is openned\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T09:26:21.000-0500",
      "body": "appears to have started with r6452\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-11T11:25:17.000-0500",
      "body": "Appears to have been resolved at r6467\n\nTested using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
UI Options accordion is not displaying/hiding properly&#x20;

Steps to reproduce:

1\) Open the UI Options example from the daily build site.\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Click on "Easier to find"

Notice that "Easier to see" doesn't completely collapse

        