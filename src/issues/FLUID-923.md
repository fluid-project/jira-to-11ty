---json
{
  "title": "FLUID-923",
  "summary": "Files too large for the uploader, affect the totals values in the progress bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-16T19:59:39.000-0400",
  "updated": "2008-12-01T12:53:15.000-0500",
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
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-923/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T20:01:06.000-0400",
      "body": "'screenshot-1' shows the incorrect value in the progress bar\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-01T12:53:15.000-0500",
      "body": "FF2, FF3 (Mac OS 10.5)\\\nIE6 (Win XP)\n"
    }
  ]
}
---
After attempting to upload a file greater than 20 MB, when you try to upload the files which are accepted into the queue, the totals for the progress bar are wrong. It is as though the rejected files were added to the uploaded value so you get  total such as 6 of 3.

Steps to reproduce:

1\) Open one of the Uploader demos from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Attempt to add some files which are greater than 20MB in size

3\) Add some files that are less than 20MB in size

4\) Click the 'Upload' button. Notice that the totals in the totals progress bar are wrong

        