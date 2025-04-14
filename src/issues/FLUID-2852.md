---json
{
  "title": "FLUID-2852",
  "summary": "Inconsistent max file size between demo and server version of uploader",
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
  "date": "2009-05-29T15:32:50.000-0400",
  "updated": "2011-02-28T16:47:16.219-0500",
  "versions": [
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-06T13:47:07.000-0400",
      "body": "I've updated the Image Gallery to not override the default max file size in the Uploader, meaning it can take files up to 20 Mb.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:47:16.217-0500",
      "body": "Closing issues that were fixed in 1.1.2\n"
    }
  ]
}
---
Inconsistent max file size between demo and server version of uploader

The server version of uploader has a max file size of 2 MB\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages>

The demo version of uploader has a max file size of 20 MB\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

        