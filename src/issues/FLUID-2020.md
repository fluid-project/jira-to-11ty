---json
{
  "title": "FLUID-2020",
  "summary": "Uploads stop at position where files were removed from the queue, in flash 9",
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
  "date": "2008-12-17T15:43:37.000-0500",
  "updated": "2009-01-13T10:34:46.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1982/",
      "key": "FLUID-1982"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:14:11.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T10:34:46.000-0500",
      "body": "fixed at r6299 with committed patches from <https://fluidproject.atlassian.net/browse/FLUID-1982#icft=FLUID-1982>\n\nVerified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Uploading files which have been readded to a file queue throws an error.

Steps to reproduce:

1\) Open the server version of uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/#>

2\) Add several files to the file queue

3\) Remove some of the files

4\) Click the 'Upload' button

Notice that the upload stops where the file(s) were removed and an error is thrown.

Error: that.progressBar.position() has no properties

From line 106 of Progress.js

        