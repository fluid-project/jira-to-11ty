---json
{
  "title": "FLUID-1748",
  "summary": "Springboards: Layout Reorderer example doesn't scroll page when reorderering with the mouse",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2008-10-30T13:36:54.000-0400",
  "updated": "2011-01-14T09:53:24.762-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Demos"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T10:38:32.000-0400",
      "body": "I have no idea whats behind this.... as mentioned in the IRC logs, i agree with you that this is something jquery ui should handle.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-30T10:28:12.000-0500",
      "body": "Appears to have been fixed\n\nTested using:\\\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Springboards: Layout Reorderer example doesn't scroll page when reorderering with the mouse

Steps to reproduce

1\) Open the Layout Reorderer Springboard example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/LayoutReorderer.html>

2\) Decrease the size of the browser window until part of the example 1 is hidden below the fold.

3\) Attempt to drag an item below down the screen

Notice that the page doesn't scroll while dragging.

        