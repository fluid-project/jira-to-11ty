---json
{
  "title": "FLUID-3115",
  "summary": "The server doesn't properly add files into the file queue: using FF 3.5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-08-20T10:06:26.000-0400",
  "updated": "2009-10-02T16:20:47.000-0400",
  "versions": [
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF 3.5 (Win XP, Win Vista Flash 9, Flash 10)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3114/",
      "key": "FLUID-3114"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-20T11:17:49.000-0400",
      "body": "Seems like something changed between FF3 and FF3.5.\n\nNot sure exactly what that was yet though. Here are some links from the swfupload forum about issues people have had with FF 3.5\n\n<http://swfupload.org/forum/generaldiscussion/1672>\n\n<http://swfupload.org/forum/generaldiscussion/1641>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-21T09:44:56.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-10-02T13:29:15.000-0400",
      "body": "Tested using FF3.5 against the Uploader running in the ImageGallery demo on the build server. Appears to be working now. The code was reviewed as part of the review for <https://fluidproject.atlassian.net/browse/FLUID-3114#icft=FLUID-3114>\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-10-02T13:32:33.000-0400",
      "body": "Resolved per Colin Clark's code and my review\n"
    }
  ]
}
---
The server doesn't properly add files into the file queue

Steps to reproduce:

1\) Open the server version of the uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/BrowseImages/>

2\) Add some files to the file queue

Notice that when you add files, the message in the bottom left hand corner of the browser says  "Transferring data from build.fluidproject.org" . If you add several files at once (happened with 4 files, but not 100% of the time), the browser will crash.

3\) Attempt to upload the files

The debug message in the console below the uploader says "No Files found in the queue"

        