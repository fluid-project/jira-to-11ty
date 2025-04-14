---json
{
  "title": "FLUID-3699",
  "summary": "Uploader QA Test 15 fails: fails to block item deletion with the use of keyboard during upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Harris Wong",
  "date": "2010-09-01T12:22:57.519-0400",
  "updated": "2011-01-20T16:13:25.665-0500",
  "versions": [
    "1.1.3",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3699/FLUID-3699.patch",
      "filename": "FLUID-3699.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3699/FLUID-3699-b.patch",
      "filename": "FLUID-3699-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-17T11:08:09.563-0500",
      "body": "Added a function to toggle keyboard row handlers on the file queue that are dependent on the FileQueueView events.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-17T11:21:01.729-0500",
      "body": "The delete key is now disabled while the uploader is uploading\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-17T13:56:16.994-0500",
      "body": "Refactored to remove unnecessary processing of files to retrieve the queue rows.   Grabbed the rows directly from the DOM instead. &#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-20T16:13:25.155-0500",
      "body": "I reviewed Mike's patch and it looks great. Committed at r10468.\n"
    }
  ]
}
---
According to <http://wiki.fluidproject.org/display/fluid/Uploader+QA+Test+Plan>, Test 15: "While a file is uploading, the 'x' (remove), 'Upload', and 'Add More' buttons should be disabled"

I uploaded several files, and clicked "Upload".  During the upload, I tabbed into the item list and started pressing "Delete" on my keyboard until all files are removed.  I have attached a screenshot.

I have reproduced this on IE7, FF3.6.8.

I have also reproduced this on the demo site (<http://build.fluidproject.org/infusion/demos/uploader/demo.html>), and the infusion-1.1.3-src-rewriteHead.

Here is the Firefox error report:\
Error: file is undefined\
Source File: <http://build.fluidproject.org/infusion/components/uploader/js/DemoUploadManager.js>\
Line: 95

Here is the IE7 error report:\
Line: 230\
Character: 17\
Code: 0\
Error Message: 'file.id' is null or not an object\
URL: <http://build.fluidproject.org/infusion/components/uploader/js/SWFUploadManager.js>

        