---json
{
  "title": "FLUID-1917",
  "summary": "Quickly removing files from the file queue causes removal to break and throw an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-12-03T16:50:32.000-0500",
  "updated": "2008-12-15T16:41:23.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1607/",
      "key": "FLUID-1607"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-04T08:42:58.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-08T19:53:03.000-0500",
      "body": "jQuery animation code can't keep up and needs to have animations dequeued during removes\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-12T15:36:48.000-0500",
      "body": "Fixed at revision 6215\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-12T15:59:16.000-0500",
      "body": "I have reviewed Antranig's fix and I like it... oh, it works and it's written very nicely\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-15T16:41:23.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Quickly removing files from the file queue causes removal to break and through an error

Steps to reproduce:

1\) Open the uploader demo:\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

2\) Add several files to the file queue

3\) using either the keyboard or the mouse, quickly remove the files from the file queue

Notice that after several files (depending on how fast you remove them) you will no longer be able to remove files and an error is thrown

        