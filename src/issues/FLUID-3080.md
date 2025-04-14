---json
{
  "title": "FLUID-3080",
  "summary": "Selection border of image goes on top of instruction box",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-08-10T08:13:37.000-0400",
  "updated": "2009-11-06T15:51:05.000-0500",
  "versions": [
    "1.1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3080/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-10T08:14:37.000-0400",
      "body": "\"screenshot-1\" shows the selection border for the image on top of the instruction text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-06T15:51:05.000-0500",
      "body": "The presentation of the instruction text has been modified and no longer causes this issue.\n"
    }
  ]
}
---
Selection border of image goes on top of instruction box

Steps to reproduce:

1\) Open the Image Reorder demo page\
<http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/image-reorderer.html>

2\) Select one of the images that is partially covered by the instruction text. Notice that the border around the image goes on top of the instruction text.

        