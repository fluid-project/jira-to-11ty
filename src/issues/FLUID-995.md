---json
{
  "title": "FLUID-995",
  "summary": "Pointer changes style over uploader, behind File Open Dialog",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-07-23T17:19:41.000-0400",
  "updated": "2008-08-01T09:36:08.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-01T09:36:08.000-0400",
      "body": "May have been resolved along with fixes for the 0.4 release.\n\nVerified using IE6 (Win XP)\n"
    }
  ]
}
---
In the pop-up version of uploader, the pointer changes style over the uploader title bar when the OS File Open Dialog is present. It should remain an arrow as the File Open Dialog is modal.

Steps to reproduce:

1\) Open the pop-up version of Uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Click the "Add Files" button

3\) After the OS File Open Dialog opens, place the pointer over the title bar of the uploader. Notice that it changes style.

        