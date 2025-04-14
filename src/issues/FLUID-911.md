---json
{
  "title": "FLUID-911",
  "summary": "DnD of Portlet containing a nested reorderer, from right column to right column not working",
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
  "date": "2008-07-16T14:24:28.000-0400",
  "updated": "2008-09-08T09:45:24.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-911/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T14:25:53.000-0400",
      "body": "'screenshot-1' shows the frozen avatar\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:22:37.000-0400",
      "body": "This is a duplicate of numerous issues issued against the base \"Reorderer\", I suggest we destroy/merge the LayoutCustomizer and Reorderer categories. Fixed with \"Geometric Manager\" etc.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:45:24.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Dragging a portlet with a nested reorderer from the right hand column and dropping it back on the right hand column will cause the avatar to freeze where it is. The page will still behave as though the pointer is dragging the avater but It does not allow you to drop the portlet anywhere.

Steps to Reproduce:

1\) Open the Uportal demo page on the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Drag and drop the Portlet containing the lightbox from the left hand column to the right

3\) Attempt to drag and drop the same portlet on any drop target in the right hand column. Notice that the avatar freezes where it was dropped.

4\) Move the pointer to various locations on the screen. Notice that the page still behaves as though you are dragging the avatar, but you cannot drop it.

        