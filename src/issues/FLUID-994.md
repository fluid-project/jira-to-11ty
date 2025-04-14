---json
{
  "title": "FLUID-994",
  "summary": "Image being dragged flashes over the image in the first position, using Opera",
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
  "date": "2008-07-23T15:16:22.000-0400",
  "updated": "2008-09-11T11:26:52.000-0400",
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
    "Image Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-14T12:28:37.000-0400",
      "body": "I wonder if it has something to do with the creation of the avatar.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T11:26:52.000-0400",
      "body": "Appears to have been fixed with changes implemented since&#x20;\n\nVerified using:\n\nOpera 9.5 (Mac OS 10.5, Win XP) r5476\n"
    }
  ]
}
---
When starting DnD, the image being dragged flashes over the image in the first position.

Steps to reproduce:

1\) Open the generic lightbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Attempt to drag an image (not in the first position, upper left corner). Notice that the image flashes in the first position.

Does not occur 100% of the time.

        