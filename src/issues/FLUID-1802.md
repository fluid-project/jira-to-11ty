---json
{
  "title": "FLUID-1802",
  "summary": "DnD not working when pointer over the corner of the portlet title bar, even though move cursor is displayed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-11-13T11:41:28.000-0500",
  "updated": "2014-06-05T15:24:32.300-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Layout Reorderer"
  ],
  "environment": "FF4 (Mac OS 10.6)\\\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1802/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-13T11:43:24.000-0500",
      "body": "'screenshot-1' shows the move cursor. Trying to perform DnD from this position won't work\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:24:32.283-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
DnD not working when pointer over the corner of the portlet title bar, even though move cursor is displayed

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

2\) Using the mouse, place the cursor just over the corner of the title bar on a movable portlet

Notice that the cursor changes to a move cursor

3\) Attempt to perform a DnD operation

Notice that DnD does not work

        