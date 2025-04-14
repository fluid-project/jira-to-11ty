---json
{
  "title": "FLUID-921",
  "summary": "Progress bar stretches outside of component if file removed while uploading",
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
  "date": "2008-07-16T18:30:07.000-0400",
  "updated": "2008-07-24T13:15:40.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-921/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T18:32:10.000-0400",
      "body": "'screenshot-1' shows the progress bar expanding outside of the componet\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-16T18:33:08.000-0400",
      "body": "I'm not sure if the 'x' should be enabled while files are uploading. The user should have to pause the upload to add/remove files from the queue\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-16T22:30:28.000-0400",
      "body": "The X should be un-clickable during upload. So that's the real bug.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-07-23T23:30:17.000-0400",
      "body": "Disabled the Remove and the Add More buttons during Upload\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-24T13:15:40.000-0400",
      "body": "Verified fixed:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
If you delete a file, click the 'x' while it is uploading, the total progress bar will expand outside of the component.

Steps to reproduce:

1\) Open one of the Uploader demos from the daily build page (it is easier to see in the inline version):\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add files to the upload queue (easier if you add larger files)

3\) Click the 'x' to remove a file, while that specific file is close to finished uploading. Notice that the total progress bar will expand outside of the component.

        