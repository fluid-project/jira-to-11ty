---json
{
  "title": "FLUID-1125",
  "summary": "last drop target in a column does not  appear as soon as it should.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-08-11T12:55:59.000-0400",
  "updated": "2008-09-08T08:57:49.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5, Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1186/",
      "key": "FLUID-1186"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1125/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-11T12:57:32.000-0400",
      "body": "'screenshot-1' shows the portlet being dragged up from the bottom and no drop target being shown. You are able to drop it here though.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T17:59:21.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T08:57:49.000-0400",
      "body": "verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The last drop target in a column doesn't appear until you cross the bottom of the lowest portlet.

Steps to reproduce:

1\) Open the uPortal demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Drag a portlet to the bottom of the page.

3\) Begin to move the portlet up below the last portlet in a column. Notice that the drop target doesn't appear until the dragged portlet crosses the the bottom of the lowest portlet (this is the lowest portlet of all columns). The drop target should appear as soon as the portlet can be dropped.

        