---json
{
  "title": "FLUID-3623",
  "summary": "Updating progress amount while floating animated progress bar is hidden, doesn't update the progress bar's position",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-04-09T16:34:16.000-0400",
  "updated": "2015-06-26T10:02:27.994-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Progress"
  ],
  "environment": "Chrome 4, FF 3.6, FF 3, IE 8, IE 7, IE 6 (Win XP) \\\nFF 3.6, IE 8, IE 9, IE 10, IE 11 (Win 7) \\\nSafari 4 (Mac OS 10.5) \\\nFF 3.6, Safari 4 (Mac OS 10.6)\\\nFF 29, Chrome 35, Safari 7 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3623/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-09T16:38:18.000-0400",
      "body": "screenshot-1 shows the correct position of the progress indicator in the upper progress bar, the lower one shows the incorrect position\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-11-05T14:33:37.332-0500",
      "body": "This manual test has been replaced\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:00.386-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Updating progress amount while floating animated progress bar is hidden, doesn't update the progress bar's position

Steps to reproduce:

1\) Open the progress manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/simple-progress.html>

2\) adjust the progress value.

3\) Click "Show Progress"

Look at the section "Progress in a float, animates forward only". Notice that this progress bar has the correct value updated textually, but the progress bar itself is still at the default position.

        