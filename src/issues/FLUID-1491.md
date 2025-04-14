---json
{
  "title": "FLUID-1491",
  "summary": "Keyboard navigation does not wrap to next row",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-09T09:37:29.000-0400",
  "updated": "2008-09-11T10:02:00.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T14:35:12.000-0400",
      "body": "Fixed at revision 5503\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T10:02:00.000-0400",
      "body": "Verified fix using:  &#x9;\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Keyboard navigation does not wrap to next row

When at the end of a row, pressing the left arrow (or 'k' key) should move you to the next row.\
Currently it will wrap to the other end of the same row.

Steps to reproduce:

1\) Open the lightbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Tap the tab key until one of the images has focus.

3\) Tap the left arrow key. Notice that after it reaches the end of the row it will wrap back around to the front instead of to the front of the next row

        