---json
{
  "title": "FLUID-1967",
  "summary": "Only bottom half of portlet title bar is a drag handle: Using IE6",
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
  "date": "2008-12-12T11:36:16.000-0500",
  "updated": "2014-06-05T15:21:37.559-0400",
  "versions": [
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
    "Layout Reorderer"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1967/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-12T11:37:43.000-0500",
      "body": "'screenshot-1' shows the pointer as a drag cursor, but you are unable to drag the portlet.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:21:37.552-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
Only bottom half of portlet title bar is a drag handle: Using IE6

Steps to reproduce:

1\) Open the uPortal mock-up from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/portal/portal.html>

2\) Attempt to drag a portlet from the top half of it's title bar

Notice that even though the pointer changes to a drag cursor. It still isn't draggable.

        