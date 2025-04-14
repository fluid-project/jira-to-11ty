---json
{
  "title": "FLUID-1483",
  "summary": "Moving an item in the lightbox causes a selection box to be displayed around the lightbox.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-08T12:09:36.000-0400",
  "updated": "2008-09-09T09:06:05.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1482/",
      "key": "FLUID-1482",
      "summary": "Moving an item from the first position of a row to the last postion of the row above causes it to display incorrectly"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1479/",
      "key": "FLUID-1479",
      "summary": "Moving an item in the lightbox causes formating issues"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1483/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-08T12:10:11.000-0400",
      "body": "'screenshot-1' shows the blue selection border around the lightbox\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T17:57:25.000-0400",
      "body": "I feel somehow this must be related to <https://fluidproject.atlassian.net/browse/FLUID-1484#icft=FLUID-1484>... I do not see this blue box in other browsers, and I am not quite clear what it is 😛 But clearly, in the process of a the DOM manipulation, Opera's idea of what this \"blue box\" represents is being corrupted...\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T18:20:51.000-0400",
      "body": "Although I can't reproduce this, I feel it might well have been resolved at rev 5490 - could you retest? Cheers\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T09:06:05.000-0400",
      "body": "Verified fix using:\n\nOpera 9.5 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Moving an item in the lightbox causes a selection box to be displayed around the lightbox.

Steps to reproduce:

1\) Open the lighbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Move one of the images. Notice the blue border that is place around the lightbox. It may only be visible on the top and/or sides.

        