---json
{
  "title": "FLUID-5415",
  "summary": "keyboard a11y demo is silent in NVDA",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-06-06T12:04:35.349-0400",
  "updated": "2016-09-01T16:30:33.143-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "IE 8 (Win XP)(NVDA 2014.2)\\\nIE 9 (Windows 7)(NVDA 2014.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-03-01T12:39:07.142-0500",
      "body": "Currently our IE support is only IE 11, we need to retest in IE 11.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-09-01T16:30:29.997-0400",
      "body": "Cannot reproduce this issue in IE 11 ( the currently supported version of IE) and MS Edge.\n"
    }
  ]
}
---
When tabbing to the images or rank, NVDA does not report anything. If you switch to focus mode (NVDA+space) you are now able to use the arrows to navigate between the images and to change the rank, but still nothing is reported back by NVDA.

        