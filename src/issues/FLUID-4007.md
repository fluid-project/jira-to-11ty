---json
{
  "title": "FLUID-4007",
  "summary": "Uploader gives an uploaded file count that differs from the actual number of files uploaded to the image gallery on the server.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jess Mitchell",
  "date": "2010-12-22T12:30:59.585-0500",
  "updated": "2017-12-22T10:13:12.989-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF4 on Mac OSX 10.6\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4007/uploader-total-progress-quirkiness.swf",
      "filename": "uploader-total-progress-quirkiness.swf"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-12-22T12:45:15.361-0500",
      "body": "Here's a screencast of the quirkiness I'm seeing in the Uploader's counting abilities.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T10:13:12.987-0500",
      "body": "The image-gallery repo has been archived\n"
    }
  ]
}
---
1\. Add a number of file to the queue\
2\. Click upload\
3\. Quickly notice the message that is displayed stating how many files were uploaded (e.g. 3 of 12 files uploaded)\
4\. Count in the image gallery the **actual** number of files uploaded.  It differs

        