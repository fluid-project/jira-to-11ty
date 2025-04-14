---json
{
  "title": "FLUID-1016",
  "summary": "Can't tab focus the file queue unless scrollbar showing, using FF3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-24T20:20:59.000-0400",
  "updated": "2008-07-28T08:20:52.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1004/",
      "key": "FLUID-1004",
      "summary": "After removing file using the keyboard, one can no longer focus the file queue"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1004/",
      "key": "FLUID-1004"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T13:39:21.000-0400",
      "body": "This was an issue with the div that wrapped the file queue only becoming focusable once it became scrolling\\\nbut the focus should really be on the queue anyway, so I set the queue to tabindex=0 and the wrapper to tabindex=-1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T08:20:52.000-0400",
      "body": "Verified fix using FF3 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Can't tab focus the file uploader unless the scroll bar is showing in the uploader.

Steps to reproduce:

1\)  Open either the inline or pop-up version of uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add a couple of files.&#x20;

3\) Tap the tab key, notice that the file queue does not get focus

4\) Add some more files, so that the scroll bar appears

5\) Tap the tab key, notice that the file queue is now able to get focus.

6\) remove some files until the scroll bar is gone

7\) Tap the tab key, notice that the file queue does not get focus

        