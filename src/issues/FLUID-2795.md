---json
{
  "title": "FLUID-2795",
  "summary": "Illegal values in manual progressbar test are not handled correct",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Armin Krauss",
  "date": "2009-05-27T15:56:03.000-0400",
  "updated": "2015-06-26T10:02:56.092-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
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
  "environment": "Mac OS X 10.4.11 - Safari 3.2.1 (4525.27.1)\\\nSafari 4 / OS X 10.5\\\nChrome 4, FF 3.6 / XP\\\nE 8, IE9, IE 10, IE 11 FF4 (Win7) \\\nFF4 (Mac OS 10.6)\\\nFF 29, Chrome 35, Safari 7 (Mac OS 10.9)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-11-05T14:24:04.385-0500",
      "body": "This manual test has been replaced\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:58.167-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
After entering an illegal value (a non number) the progress bar stays at the previous value. However, the description changes to NaN %. This should stay at the previous percentage as well.

        