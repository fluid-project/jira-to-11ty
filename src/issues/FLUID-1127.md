---json
{
  "title": "FLUID-1127",
  "summary": "Drop targets are not visible when pointer dead centre between two columns",
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
  "date": "2008-08-11T13:36:12.000-0400",
  "updated": "2008-09-08T09:02:34.000-0400",
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
  "environment": "FF2, Opera 9.5 (Mac OS 10.5, Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1127/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-11T13:37:06.000-0400",
      "body": "'screenshot-1' shows the avatar being dragged acrros two columns. Notice that there are no drop targets visible.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T17:59:52.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:02:34.000-0400",
      "body": "Verified fix using:\n\nFF2, Opera 9.5 (Mac OS 10.5, Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
When dragging a portlet from one column to the next, their is a point where there are no drop targets visible in either column.&#x20;

Steps to reproduce:

1\) Open the uPortal demo from the daily build site:

2\) Slowly drag a portlet from one column to the other. Notice that when you get to the middle, between the two columns, no drop targets are visible.

        