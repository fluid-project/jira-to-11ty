---json
{
  "title": "FLUID-1059",
  "summary": "Arrow keys in nested reorderable moves the browser's scroll bar, FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2008-07-29T11:40:05.000-0400",
  "updated": "2008-08-01T09:06:41.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-325/",
      "key": "FLUID-325",
      "summary": "Key presses cause scrolling when selectables are contained in a scrollable element such as a scrolling div."
    }
  ],
  "attachments": [],
  "comments": []
}
---
Using the arrow keys on the keyboard to change the selection of items  in a nested reorderable, moves the scroll bar of the parent.

Steps to reproduce:

1\) Open the uPortal demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Tab to the one of the images inside the lightbox portal

3\) Using the keyboard, tap the arrow 'up' or 'down' arrow keys to change selection. Notice that browser's scroll bar moves as you tap the arrow key

        