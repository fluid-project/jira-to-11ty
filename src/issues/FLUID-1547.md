---json
{
  "title": "FLUID-1547",
  "summary": "Drop target in wrong location when column only has a locked portlet",
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
  "date": "2008-09-11T12:12:08.000-0400",
  "updated": "2008-09-12T09:01:44.000-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1547/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-11T12:12:45.000-0400",
      "body": "'screenshot-1' shows the drop target in the wrong location. It should be under the locked portlet in the same column as the avatar\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-11T13:23:49.000-0400",
      "body": "Whisky Award Bug! Congrats Justin. Fixed at revision 5515.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-12T09:01:44.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Drop target in wrong location when column only has a locked portlet

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Move all of the movable portlets from the left column to the right

3\) Attempt to move a portlet from the right column back to the left

Notice that if you are lower than where the drop target would appear, the drop target is placed back into the right column.

        