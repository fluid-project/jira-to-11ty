---json
{
  "title": "FLUID-859",
  "summary": "Background of avatar becomes opaque on second drag",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-07-08T15:02:04.000-0400",
  "updated": "2008-07-08T19:51:11.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FF2 (Mac OS X)\\\nFF2, FF3 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-08T19:40:27.000-0400",
      "body": "Justin, if you happen to pick up the thumbnail that is already grey because it has focus, then the avatar will have the same solid grey (it is a clone of the thumbnail). This is expected behaviour.\n\nCould you double-check if this is what is happening?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-08T19:51:11.000-0400",
      "body": "Yes that was the issue. Closed, as this was the expected behaviour.\n"
    }
  ]
}
---
Steps to reproduce:

1\) open the generic lightbox example on the daily build page:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) drag one reorderable element and drop it somewhere (doesn't have to be a valid drop target). Notice that the avatar has a transparent  \
background.

3\) without selecting anything else, begin to drag the same element again. Notice this time that the avatar has an opaque background.

        