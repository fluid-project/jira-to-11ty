---json
{
  "title": "FLUID-1622",
  "summary": "Tab order incorrect after reordering an image",
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
  "date": "2008-09-25T16:22:51.000-0400",
  "updated": "2014-07-07T16:05:52.556-0400",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "FF3 (Mac OS 10.4)\\\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-04T13:00:18.000-0500",
      "body": "Other tab order issues:\n\nAfter putting focus on one of the images push shift-tab, then tab. Notice that you are not back on the image\n\nAfter reordering or changing selection with the keyboard, pressing tab then shift-tab will also not put on you back on the image.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:09:17.066-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T15:04:12.227-0500",
      "body": "updated affects version and the steps to reproduce.\n"
    }
  ]
}
---
Tab order incorrect after reordering an image. After reordering the images pressing tab will take you to the component's container or to the last image you reordered.

steps to reproduce:

1\) Open the Image Reorderer demo from the daily build site:\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>

2\) Reorder the images using either the mouse or the keyboard

3\) Using the keyboard press the "tab"

Notice that you are put on the reorderer's container or back onto the same element that you just moved.

        