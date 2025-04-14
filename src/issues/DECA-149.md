---json
{
  "title": "DECA-149",
  "summary": "The left-right camera calibration page requires scrolling when viewport is 642px or smaller",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-07-21T10:05:01.848-0400",
  "updated": "2012-05-25T13:43:00.182-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Calibration"
  ],
  "environment": "Ubuntu 10.04, FF 3.6 MacBook Pro 15\"\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-149/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-21T10:06:48.858-0400",
      "body": "Screenshot.png shows the scrollbars and that the \"Done...\" button is not visible\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:43:00.182-0400",
      "body": "The calibration workflow has been removed from this release\n"
    }
  ]
}
---
Steps to reproduce

1\) Start decapod and navigate to the Camera Calibration page

2\) Set the viewport to have a height of 642px or less (this is the full screen height of the viewport on a MacBook Pro 15" with a 1440 x 900 resolution)

Notice that a scrollbar appears on the right hand side and that the done button is below the fold.

        