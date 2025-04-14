---json
{
  "title": "FLUID-2554",
  "summary": "Adding empty/zero bytes/0kb/0b files fails in Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-04-07T11:31:00.000-0400",
  "updated": "2011-01-10T16:06:15.340-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nIE6 (WinXP)\\\nIE9 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3269/",
      "key": "FLUID-3269"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-10T16:06:15.329-0500",
      "body": "Server issue, not client-side.\n"
    }
  ]
}
---
<http://wiki.fluidproject.org/display/fluid/Uploader+QA+Test+Plan>\
Boundary tests #1\
Test 1: Upload a File With a Small File Size

* Procedure\
  &#x20;        1\. Open the browser and navigate to the specified URL\
  &#x20;        2\. Using the mouse, click the 'Browse Files' button\
  &#x20;        3\. From the OS file open dialog, select a file that is approximately 0KB (e.g. blank text file)\
  &#x20;        4\. Using the mouse, click 'Select' or 'Open'

I created an empty test file in notepad and renamed the file text.jpg - the file properties indicate the file size is 0 and the size on disk is also 0.

I attempted to add the file using "browse files" and "Open" as described in the test.

The file was not added to the "uploading list"

        