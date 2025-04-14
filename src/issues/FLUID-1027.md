---json
{
  "title": "FLUID-1027",
  "summary": "First file in file queue should have focus, when file queue focused",
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
  "date": "2008-07-24T20:42:21.000-0400",
  "updated": "2008-07-28T08:59:07.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-25T16:30:44.000-0400",
      "body": "Updated behaviour:\n\nIE7, IE6:\n\ncan shift-tab back into the file queue. There is no focus styling on any of the files, but you can tap an arrow key to move across files (notice scroll bar moving). \\\nIf you play with the arrow and delete keys, you can delete items in IE7. In IE6 the whole file queue will delete.\n\nOpera 9.5:\n\nOn win xp, will put focus on the entire file queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T16:32:47.000-0400",
      "body": "FF2, FF3 (mac os 10.5, win xp)\\\nOpera 9.5 (mac os 10.5)\n\nWorking properly provided you don't delete the focused file from the queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T08:59:07.000-0400",
      "body": "Appears to be fixed, may have been resolved along with fix to Fluid-1028.\n\nVerified using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)&#x20;\n"
    }
  ]
}
---
The first file in the file queue should have focus, when the file queue is focused.

Steps to reproduce:

1\) Open either version of the uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>&#x20;

2\) Add several files to the file queue.

3\) tab to the file queue. Notice that the whole file queue has focus, and not just the first file.

        