---json
{
  "title": "FLUID-2444",
  "summary": "Focus on dropdown menu cannot be lost by tabbing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T12:32:29.000-0400",
  "updated": "2014-07-09T09:50:25.843-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Win XP, Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T14:06:05.000-0400",
      "body": "It is sort of losing focus, as focus is being moved to other browser elements (i.e. the zoom size and address bar). However, the styling is not removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-09T09:50:25.842-0400",
      "body": "Opera is no longer a supported browser.\n"
    }
  ]
}
---
After focus placed on the dropdwon text edit menu by tabbing, it cannot be lost by tabbing again.

        