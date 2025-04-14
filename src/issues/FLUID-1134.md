---json
{
  "title": "FLUID-1134",
  "summary": "Number of files uploaded displayed as 0",
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
  "date": "2008-08-12T09:13:14.000-0400",
  "updated": "2008-12-19T07:36:53.000-0500",
  "versions": [
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
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1134/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-12T09:14:25.000-0400",
      "body": "'screenshot-1' shows the uploader after having uploaded a file. Notice that it says 0 files were uploaded\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-19T07:36:53.000-0500",
      "body": "Appears to have been fixed\n\nTested with:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
After uploading all files in a the file queue information about what was uploaded is displayed in the total progress bar. It says "Uploded: # of files (size KB)". The size is displayed correctly but the number of files is always displayed at 0. It should be the total number of files that were uploaded.

Steps to reproduce:

1\) Open either version of the uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add some files to the file queue.

3\) upload the files, remember how many were in the file queue

4\) notice that the uploaded information says that 0 files were uploaded.

        