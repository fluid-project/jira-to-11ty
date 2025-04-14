---json
{
  "title": "FLUID-2555",
  "summary": "Focus styling is also placed on the first item in the file queue when adding files via keyboard: using FF",
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
  "date": "2009-04-07T11:39:50.000-0400",
  "updated": "2014-07-11T14:19:01.173-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2555/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-07T11:41:13.000-0400",
      "body": "'screenshot-1' shows the highlighting of the firs file in the file queue and the focus styling on the upload button\n"
    }
  ]
}
---
Focus styling is also placed on the first item in the file queue when adding files via keyboard

Steps to reproduce:

1\) Open the Uploader example \
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Using the  keyboard add files to the file queue

3\) Notice that the focus styling is correctly placed on the upload button, but is also on the first file in the file queue

        