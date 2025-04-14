---json
{
  "title": "FLUID-875",
  "summary": "Progress bar does not update as files are deleted from  queue after upload paused",
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
  "date": "2008-07-08T19:27:57.000-0400",
  "updated": "2008-12-01T13:00:30.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-01T13:00:30.000-0500",
      "body": "FF2, FF3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The progress bar will still show the original stats after deleting files from the queue, after the upload is paused.

steps to reproduce:

1\) open either the in-line or pop-up version of uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) click "add files"

3\) add some files to the queue

4\) click upload

5\) while there are still several files left, pause the upload

6\) delete the remaining files from the queue. Notice, as you go along, that the information in the progress bar doesn't change.

        