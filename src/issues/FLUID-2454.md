---json
{
  "title": "FLUID-2454",
  "summary": "Overlapping text in locked portlet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-01T14:01:36.000-0400",
  "updated": "2014-06-05T15:22:06.063-0400",
  "versions": [
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
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2454/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-01T14:02:09.000-0400",
      "body": "'screenshot-1' shows the overlapping text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:22:06.051-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
Overlapping text in locked portlet

Steps to reproduce:

1\) Open the uPortal mock-up\
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

Notice that the Header in the welcome portlet overlaps the text below.

        