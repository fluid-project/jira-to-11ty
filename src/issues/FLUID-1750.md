---json
{
  "title": "FLUID-1750",
  "summary": "Portlets overlaps footer text; using FF2",
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
  "date": "2008-10-30T13:41:55.000-0400",
  "updated": "2014-06-05T15:21:09.225-0400",
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
  "environment": "FF2 (Win XP, Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1750/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T13:43:13.000-0400",
      "body": "'screenshot-1' shows the lightbox portlet overlapping the footer text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:21:09.214-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
Portlets overlaps footer text

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

2\) Move all of the portlets from the right column to the left.

Notice that the bottom portlet will overlap the footer text instead of changing the size of the page.

        