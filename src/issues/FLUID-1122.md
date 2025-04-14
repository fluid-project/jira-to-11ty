---json
{
  "title": "FLUID-1122",
  "summary": "Can successfully perform DnD when drop marker not present",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-08-11T09:07:36.000-0400",
  "updated": "2008-08-12T08:23:12.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-11T12:24:00.000-0400",
      "body": "Fixed at revision 5342\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-12T08:23:12.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
An element can be successfully dragged and dropped even when the drop marker is no longer present. This is particularly evident at the end/beginning of a list, but can also be seen at other drop targets (See below for steps to reproduce this example).

Steps to reproduce:

1\) Open the generic lightbox example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Drag an image from the top row between two other images on the top row, so that the drop marker appears.

3\) Continue dragging the image. Move it up, around, and below the group of images (without causing any other drop markers to appear)

4\) Release the mouse button and notice that the image snaps back to where the drop marker had appeared, even though the drop marker is no longer visible. The image should have snapped back to it's original location.

It seems that the last drop location is remembered and the image will snap back to that spot when not on a valid drop point.

        