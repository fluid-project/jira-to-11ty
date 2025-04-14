---json
{
  "title": "FLUID-922",
  "summary": "Individual file progress bar not displayed on mouse hover or select",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-16T18:46:44.000-0400",
  "updated": "2017-01-16T09:27:20.543-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF 50 (macOS 10.12)\\\nFF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nChrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE 11 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:01:15.000-0400",
      "body": "It is displaying just before it fiinishes uploading.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-14T13:18:44.000-0500",
      "body": "It appears as though the mouse hover styling is covering the progress bar\n"
    }
  ]
}
---
When uploading files. If the pointer is over top of a file in the queueu, before it starts uploading, the individual files progress bar will not be displayed.&#x20;

Steps to reproduce:

1\) Open one of the uploader demo pages from the daily build site:\
<http://build.fluidproject.org/infusion/demos/uploader/>

2\) Add some files to the upload queue. Easier to see if you use larger files

3\) Click the 'Upload' button

4\) place the pointer over one of the files which has not yet uploaded. Notice that when it starts uploading, its progress bar is not displayed

        