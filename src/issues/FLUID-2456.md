---json
{
  "title": "FLUID-2456",
  "summary": "The avatar for the reorderable jQuery UI tabs, is virtually invisible",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2009-04-01T14:31:47.000-0400",
  "updated": "2009-04-14T09:55:09.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2035/",
      "key": "FLUID-2035"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2456/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-01T14:34:13.000-0400",
      "body": "'screenshot-1' shows the avatar being dragged but not really visible\n"
    }
  ]
}
---
The avatar for the reorderable jQuery UI tabs, is virtually invisible

Steps to reproduce:

1\) Open the sortable jQuery tabs example\
<http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/jquery-tabs.html>

2\) Using the mouse reorderer the tabs

Notice that the avatar is virtually invisible

        