---json
{
  "title": "FLUID-537",
  "summary": "Clicking on whitespace selects all draggable elements in FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-04-28T12:10:33.000-0400",
  "updated": "2009-05-05T09:46:16.000-0400",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-537/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T13:11:47.000-0400",
      "body": "It seems that clicking on the 'margin' selects all the elements. Changing 'margin' to 'padding' may work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T10:27:22.000-0400",
      "body": "'screenshot-1' shows all of the images selected\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T09:46:16.000-0400",
      "body": "Appears to have been fixed, possibly as some last minute styling fixes\n"
    }
  ]
}
---
Clicking on the whitespace below "This is the Lightbox demo page" and above the draggable elements, causes all the draggable elements to be selected.&#x20;

        