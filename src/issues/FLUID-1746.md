---json
{
  "title": "FLUID-1746",
  "summary": "Drop target in the wrong position, when hovering over the purple sidebar",
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
  "date": "2008-10-30T13:00:19.000-0400",
  "updated": "2014-06-05T15:27:33.894-0400",
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
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1746/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T13:01:34.000-0400",
      "body": "This issue does not seem to affect the calendar portlet.&#x20;\n\nThe bookmarks portlet shows this behaviour after is has been dropped in the left hand column and moved back to the right hand column.\n\nThe lightbox portlet shows this behaviour if it is moved to the right hand column\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-30T13:02:54.000-0400",
      "body": "'screenshot-1' shows the drop target appearing in the wrong location.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T13:21:55.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T15:16:19.360-0500",
      "body": "This issue refers to the uPortal integration example ( <http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:27:33.892-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
Drop target in the wrong position, when hovering over the purple sidebar. This only seems to occur with portlets being dragged from the right hand column.

Steps to reproduce

1\)  Drag the weather portlet over the purple side bard.

Notice that the drop target remains in the right column, instead of in the left hand column

        