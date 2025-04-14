---json
{
  "title": "DECA-147",
  "summary": "On successfully identifying the cameras a dot appears below the camera status message.",
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
  "date": "2010-07-21T09:53:25.858-0400",
  "updated": "2012-05-25T13:42:24.119-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Calibration"
  ],
  "environment": "FF 3.5 (Ubuntu 10.04)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-147/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-21T09:53:46.210-0400",
      "body": "This is caused by the fact that there is a period in the markup.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-21T10:11:28.859-0400",
      "body": "Screenshot.png shows a dot below the status message in the middle of the screen\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:42:24.118-0400",
      "body": "The calibration workflow has been removed from this release\n"
    }
  ]
}
---
Steps to reproduce.

1\) Start decapod with either two matching and supported cameras or with the --no-cameras flag

2\) Click "Capture a New Book" to get the camera message page

3\) Notice that below the message "To get the best results..." is a dot

        