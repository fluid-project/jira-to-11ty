---json
{
  "title": "FLUID-1546",
  "summary": "Locked portlet error message displayed when trying to drop a portlet in a column with only a locked portlet in it.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-11T12:05:35.000-0400",
  "updated": "2008-09-12T09:02:11.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1546/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-11T12:07:38.000-0400",
      "body": "'screenshot-1' shows the locked portlet error message appearing when trying to drop the portlet in a valid spot below the locked portlet\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-11T13:24:08.000-0400",
      "body": "Whisky Award Bug! Congrats Justin. Fixed at revision 5515.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-12T09:02:11.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Locked portlet error message displayed when trying to drop a portlet in a column with only a locked portlet in it.

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Move all of the portlets from the left side to the right column

3\) Try to drag a portlet from the right column back to the left column.

Notice that if you are close to where the drop target is located there is no error message. But as you move further down away from it, the error message appears.

        