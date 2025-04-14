---json
{
  "title": "FLUID-3928",
  "summary": "Dragging and dropping an image outside of the window or frame, will not remove focus styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2010-12-16T14:38:29.024-0500",
  "updated": "2015-06-26T09:57:00.104-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE 6 (Win XP), IE 7 (Win XP), IE 8 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3928/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-16T14:50:24.946-0500",
      "body": "\"screenshot-1\" shows how multiple images can obtain focus styling at once\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T09:07:36.825-0400",
      "body": "Cannot reproduce in IE 11 which is only currently supported version of IE\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:48.511-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The focus styling will remain if an image is dragged and dropped outside of the window or frame.

Steps to reproduce:

1\) Open the image reorderer demo\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>

2\) Using the keyboard drag and drop an image out of the window/frame.\
Notice that the focus styling remains, unless you hover on and off of it.

You can end up with all of the elements  having focus styling.

        