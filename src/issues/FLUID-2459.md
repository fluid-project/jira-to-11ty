---json
{
  "title": "FLUID-2459",
  "summary": "Removing files from the file queue throws an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-04-01T16:13:48.000-0400",
  "updated": "2009-04-07T16:10:12.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2459/FLUID-2459.a.patch",
      "filename": "FLUID-2459.a.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-04-01T20:35:41.000-0400",
      "body": "Interesting bug. Pretty sure that the fix is to move the offending line (292):&#x20;\n\nthat.queue.currentBatch.totalBytesUploaded += file.size;\n\ninside the else clause so the method becomes:\n\nthat.events.onFileError.addListener(function (file, error) {\\\nif (error === fluid.uploader.errorConstants.UPLOAD\\_STOPPED) {\\\nthat.queue.isUploading = false;\\\n} else if (that.queue.isUploading) {\\\nthat.queue.currentBatch.totalBytesUploaded += file.size;\\\nthat.queue.currentBatch.numFilesErrored++;\\\n}\\\nfileStatusUpdater(file);\\\n});\n\nHowever, I'm going to sleep on it.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-02T08:52:30.000-0400",
      "body": "Not sure if this will help or not, but the error doesn't occur if the upload button has been pressed. So if you start and stop an upload or let it complete and then add more files, removing files from the queue won't throw the error.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-02T14:53:42.000-0400",
      "body": "Will require a full set of QA tests after it is resolved.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-03T12:56:16.000-0400",
      "body": "The <https://fluidproject.atlassian.net/browse/FLUID-2459#icft=FLUID-2459>.a.patch is exactly the fix outlined above. Tested on the server and demo versions.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-03T17:34:41.000-0400",
      "body": "I have reviewed Eli's patch and it is correct. I tested it on the following platforms and it checks out:\n\nDemo Uploader\\\nMac OS X: FF 2, Safari 4 beta\\\nWindows: FF 2, IE 7\n\nI'm having trouble with my server version, so perhaps someone else can give it a try?\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-04-03T18:03:04.000-0400",
      "body": "I ran it on my local server and it worked well... but then I wrote the patch so I don't count. 😉\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-06T14:48:06.000-0400",
      "body": "I've since tested it on a server build and it's working great. +1 for including this in 1.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-07T16:10:12.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n"
    }
  ]
}
---
Removing files from the file queue throws an error

Steps to reproduce:

1\) Open either the server or the demo version of uploader\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/BrowseImages/>

2\) Add files to the file queue

3\) Remove a file from the file queue

Notice that an error is thrown

Error: that.queue.currentBatch is undefined\
File: SWFUploadManager.js\
Line: 292

        