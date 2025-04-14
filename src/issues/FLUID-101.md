---json
{
  "title": "FLUID-101",
  "summary": "For drag-and-drop in IE6 and IE7, dragging changes the colour of the thumbnails as one drags the avatar over them.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jonathan Hung",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-11-06T15:50:54.000-0500",
  "updated": "2007-12-18T14:30:16.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-143/",
      "key": "FLUID-143"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2007-11-19T15:25:37.000-0500",
      "body": "In IE7 this occurs when you attempt to drag the image with the mouse over the white padding arround the image name, to the right of the image, and to the left of the image.\n\nIn IE6 this occurs when you attempt to drag the image with the mouse over the white padding below the image name.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-18T14:30:16.000-0500",
      "body": "Appears to be a duplicate of Fluid-143.\n"
    }
  ]
}
---
Guess:  this is the normal behaviour when selecting content within the browsers using the mouse and "click-and-hold".  That will highlight the content selected.  As it happens, the mousing from drag-and-drop is exactly the same gesture.

        