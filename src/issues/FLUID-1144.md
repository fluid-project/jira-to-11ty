---json
{
  "title": "FLUID-1144",
  "summary": "Scroll bar moves to the top and down to the bottom as additional files are added to the file queue",
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
  "date": "2008-08-14T14:40:37.000-0400",
  "updated": "2008-08-28T09:19:24.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-28T09:19:24.000-0400",
      "body": "cannot reproduce.\n\nappears to have been resolved possibly with r5432\n"
    }
  ]
}
---
when adding additional files to the file queue, when there is a scroll bar present. The scroll bar will move to the top and then to the bottom on each file that is being added to the queue. This makes it appear to flash on the screen.

Steps to reproduce:

1\) Open either version of the uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add enough files to the file queue so that the scroll bar appears

3\) Add several more files to the file queue. Notice that the scroll bar jumps to the top and back down to the bottom as each file is added to the queue.

        