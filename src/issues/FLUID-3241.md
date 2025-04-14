---json
{
  "title": "FLUID-3241",
  "summary": "Can only tab to the \"Browse Files\" button once: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-10-06T16:37:33.000-0400",
  "updated": "2011-01-05T11:55:48.675-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE 7, IE 8 (Win Vista) Flash 10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-05T11:55:48.673-0500",
      "body": "Resolved in Infusion 1.3\n"
    }
  ]
}
---
Can only tab to the "Browse Files" button once

Steps to reproduce:

1\) Open the Uploader demo\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Using the keyboard tab to the browse files button.\
Notice that there are two bounding boxes, a black and a yellow one.

3\) Using the keyboard tab around again, until you reach the "Browse Files" button a second time\
Notice that this time there is only one bounding box, a black one. Now you cannot use the keyboard to open activate Browse Files

        