---json
{
  "title": "FLUID-1024",
  "summary": "Can't tab focus the file queue (not FF)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-24T20:28:35.000-0400",
  "updated": "2008-07-28T08:56:29.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5)\\\nIE6, IE7,Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-28T08:56:29.000-0400",
      "body": "Appears to be fixed, may have been resolved along with fix to Fluid-1028.\n\nVerified using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
Can't tab focus the file queue at all.

Steps to Reproduce:

1\) Open either of the version of uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>&#x20;

2\) Add some files to the file queue

3\) notice that you can't tab focus the file queue, whether the scrollbar is showing or not

        