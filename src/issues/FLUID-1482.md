---json
{
  "title": "FLUID-1482",
  "summary": "Moving an item from the first position of a row to the last postion of the row above causes it to display incorrectly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-08T11:49:18.000-0400",
  "updated": "2008-09-09T09:03:03.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1479/",
      "key": "FLUID-1479",
      "summary": "Moving an item in the lightbox causes formating issues"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1483/",
      "key": "FLUID-1483"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1482/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1482/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-08T11:51:47.000-0400",
      "body": "'screenshot-1' shows the appearance of this issue in Firefox. Notice that the image of the Kiwi isn't displayed and the dotted line across the screen.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T11:53:11.000-0400",
      "body": "'screenshot-2' shows the appearance of this issue in IE. Notice that the Kiwano is displayed in between the two rows.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T17:22:52.000-0400",
      "body": "I can't reproduce this one on my machine (neither FF2, FF3 nor Opera under Windows) - Justin, can you re-verify or determine some other environmental conditions?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T09:03:03.000-0400",
      "body": "Appears to have been fixed along with fix for Fluid-1484  &#x9;\n\nVerified resolved using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the lightbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Move the first image from the second row to the last position of the first row.

Notice that the image is and it's container are displayed incorrectly.

        