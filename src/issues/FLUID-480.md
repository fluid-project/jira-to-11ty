---json
{
  "title": "FLUID-480",
  "summary": "Inconsistency in mouse cursor change in Lightbox element rollover",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T13:38:00.000-0400",
  "updated": "2008-11-13T13:30:40.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "WIn Xp, IE7, FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T15:47:48.000-0400",
      "body": "Fixed. The cursor now changes to the 'move' cursor.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:30:40.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
On the lightbox demo page, the mouse cursor only changes into a hand when it is directly over the label or the image in an element box. However if you move the mouse pointer just inside the borders of an element's box you can still drag it - an inconsistency . The mouse cursor should change to a hand as soon as it crosses any border whenmoving into an element box.

        