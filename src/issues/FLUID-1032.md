---json
{
  "title": "FLUID-1032",
  "summary": "File Queue becomes invisible when scroll bar removed, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-28T10:13:40.000-0400",
  "updated": "2008-09-16T14:57:33.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1032/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-28T10:15:32.000-0400",
      "body": "'screenshot-1' shows the invisible file queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:57:33.000-0400",
      "body": "Appears to have been fixed with re-write of Uploader\n\nVerified using:\\\nIE 6 (Win XP)\n"
    }
  ]
}
---
Deleting files from the file queue readjusts the size and scroll bar. When the scroll bar is removed, the file queue becomes invisible.

Steps to reproduce:

1\) Open either version of the Uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add some files in the file queue so that the scroll bar is displayed

3\) Remove files from the queue. Notice that when the scroll bar is removed, the file queue becomes invisible

4\) Using the keyboard, tap the 'delete' key. Notice that the file queue is visible again.

You can also add more files, or start the upload to make the file queue visible again.

        