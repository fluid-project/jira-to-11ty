---json
{
  "title": "FLUID-822",
  "summary": "Upload: After pausing queue wont resume but seems to \"get stuck\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-06-25T19:16:24.000-0400",
  "updated": "2009-02-13T14:06:49.000-0500",
  "versions": [
    "0.4",
    "0.5",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2239/",
      "key": "FLUID-2239"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2240/",
      "key": "FLUID-2240"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-822/FLUID-822.a.patch",
      "filename": "FLUID-822.a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-822/FLUID-822-console-output.txt",
      "filename": "FLUID-822-console-output.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-822/SWFUpload v2.2.0 Beta 3 Core.zip",
      "filename": "SWFUpload v2.2.0 Beta 3 Core.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-822/SWFUpload v2.2.0 Beta 4 Core.zip",
      "filename": "SWFUpload v2.2.0 Beta 4 Core.zip"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-25T19:20:16.000-0400",
      "body": "I've attached the output from the console, looks useful, but I'm not sure...\n"
    },
    {
      "author": "Former user",
      "date": "2008-06-25T22:47:03.000-0400",
      "body": "It's fairly easy for the \"Pause\" request to wedge between the point that the server has completely received the new file and the point at which the Uploader component is notified about the successful upload. When this happens, if the user then selects \"Resume\", the component will attempt to start the queue from that (already loaded) file, leading either to server-side file duplication or to a duplicate-file error being thrown by the server.\n\nA couple of work items fall out of this:\n\n1\\. Currently, the Uploader component is not displaying any message about the error after the resume. Instead, it simply looks \"stuck\". This seems like a component bug: it should show the usual error message.\n\n2\\. The workaround in the meantime is for the user to delete the \"stuck\" entry from the queue. Once that's done, the remaining uploads carry on. We might want to mention this in the release notes for the next beta.\n\n3\\. Once we change the Image Gallery sample app to send back a \"smart\" error message, we can experiment with (optional) smarter hand-shaking around known file duplicates. Alternatively, we could look into having the Uploader component tell the server whether this file is a new upload or a possibly-resumed one, and then have the server software be smart enough to report \"success\" for the duplicate.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-22T21:41:36.000-0400",
      "body": "I'm wondering if it would be acceptable to check the progress of a file before canceling the upload and then if the file was almost complete, let the file complete...\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:41:25.000-0400",
      "body": "uploader-1-wishlist\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2009-01-13T10:56:09.000-0500",
      "body": "Adding this (and updating affected versions for completeness) as it looks slightly different. Same steps to reproduce\n\nSWF DEBUG: StopUpload(): upload stopped.\\\nSWF DEBUG: StartUpload: First file in queue\\\nSWF DEBUG: Event: uploadStart : File ID: SWFUpload\\_0\\_4\\\nSWF DEBUG: ReturnUploadStart(): File accepted by startUpload event and readied for upload.  Starting upload to ../../site/multiFileUpload for File ID: SWFUpload\\_0\\_4\\\nSWF DEBUG: Event: uploadProgress (OPEN): File ID: SWFUpload\\_0\\_4\\\nSWF DEBUG: Event: uploadError: upload stopped. File ID: undefined\\\nSWF DEBUG: Event: uploadComplete. File ID: undefined\\\nSWF DEBUG: StopUpload(): upload stopped.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-30T17:48:45.000-0500",
      "body": "Here's a copy of the source code for SWFUpload 2.2.0 beta 3 in order to compare with the latest version, in case this issue has been fixed quietly.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-30T17:49:04.000-0500",
      "body": "And here's b4.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T09:12:06.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-11T19:32:50.000-0500",
      "body": "The attached patch <https://fluidproject.atlassian.net/browse/FLUID-822#icft=FLUID-822>.a.patch works around the infamous \"Pause bug\" but waiting to stop the upload until the currently uploading file has completed.&#x20;\n\nWhile this is not ideal in most instances, with the exception of really large files or really slow connections, it will hardly be noticeable.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-12T17:18:05.000-0500",
      "body": "I reviewed Eli's implementation and it works and looks good. +1&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-12T18:27:24.000-0500",
      "body": "Committed the patch and reviewed the results.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-13T14:06:49.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n"
    }
  ]
}
---
Please note that that this is an intermittent bug that only happens in the "real" or "live" mode of Uploader. It will never happen in the demo version.

1\) Load up a queue with a number of files. \
2\) Click Upload.\
3\) Click Pause.\
4\) Once paused, click Upload again.&#x20;

OBSERVE: the Upload appears to start but progress does not progress and the DEBUG field stops at:\
SWF DEBUG: StartUpload: First file in queue\
SWF DEBUG: Event: uploadStart : File ID: SWFUpload\_0\_6\
SWF DEBUG: ReturnUploadStart(): File accepted by startUpload event and readied for upload.  Starting upload to ../../site/multiFileUpload for File ID: SWFUpload\_0\_6\
SWF DEBUG: Event: uploadProgress (OPEN): File ID: SWFUpload\_0\_6

        