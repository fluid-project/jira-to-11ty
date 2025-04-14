---json
{
  "title": "FLUID-2028",
  "summary": "Adding multiple files to the file queue will cause the browse button to appear multiple times for a brief moment (flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-17T17:28:01.000-0500",
  "updated": "2009-06-04T09:22:21.000-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3(Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-03-24T19:46:52.000-0400",
      "body": "I could not reproduce this bug. Although we didn't do anything specific to fix it, I'm wondering if we inadvertently managed to fix it.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-04T09:22:21.000-0400",
      "body": "Appears to have been fixed, possibly  with the upgrade to the final version of swfupload 2.20\n\nTested using:\n\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
Adding multiple files to the file queue will cause the browse button to appear multiple times for a brief moment (flash 10)

Steps to reproduce:

1\) Open the demo version of uploader\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

2\) Add about 10 or so files to the file queue at once

Notice that as they are being added to the queue, the "Browse Files" button is briefly display multiple times

        