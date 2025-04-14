---json
{
  "title": "FLUID-1733",
  "summary": "Uploader 2: the progress in the total progress bar is only displayed along the top half, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-10-29T14:52:19.000-0400",
  "updated": "2014-06-25T15:55:53.894-0400",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 6 (win 2000 & Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1733/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1733/uploader-ie6-winXP.jpg",
      "filename": "uploader-ie6-winXP.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-29T14:56:18.000-0400",
      "body": "'screenshot-1' shows the progress not displaying properly in the total progress bar\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-21T13:53:01.326-0500",
      "body": "I'm still noticing this during 1.3 testing, IE6 on Win XP\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-21T13:55:21.258-0500",
      "body": "The attached image (uploader-ie6-winXP.jpg) shows what it looks like during 1.3 testing in IE6 on Win XP.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:53.841-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
the progress in the total progress bar is only displayed along the top half, using IE6 (w2k)

Steps to reproduce:

1\) add some files to the file queue

2\) upload the files

Notice that as the files are being uploaded the progress is only displayed on the top half of the total progress bar

        