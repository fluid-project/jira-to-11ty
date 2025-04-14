---json
{
  "title": "FLUID-4480",
  "summary": "(IE) Uploader (server version) displays error message when file removed from queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2011-09-30T14:00:12.302-0400",
  "updated": "2015-06-10T10:23:18.316-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, 7 & 8 on Win XP\\\nIE9 on Win 7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4480/uploader-error.png",
      "filename": "uploader-error.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-09-30T14:03:08.386-0400",
      "body": "This (uploader-error.png) screen shot shows the error message that occurs when a file is removed from the queue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:23:18.314-0400",
      "body": "The uploader server demo no longer exists.\n"
    }
  ]
}
---
This error occurs using the Image Gallery server demo, not the simpler demo.

In IE, if you remove a file from the uploader queue, an error message appears:

HTTP Status code: File cancelled.\
\<file> failed to upload

where \<file> is the file removed from the queue. The Uploader seems to function just fine: the file is removed from the queue, and you can continue to add files, upload, etc. You just get this message.

        