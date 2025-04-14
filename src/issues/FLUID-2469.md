---json
{
  "title": "FLUID-2469",
  "summary": "Tab key does not focus on page links",
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
  "date": "2009-04-02T10:16:09.000-0400",
  "updated": "2009-05-05T14:27:28.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "XP: Opera 9.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T14:27:28.000-0400",
      "body": "Opera traverses to links on a page through ctrl-(down arrow) instead of by the \"tab\" key.\n"
    }
  ]
}
---
WIth Opera, tabbing never leaves the Points boxes to go to the page links on the daily build page \
<http://build.fluidproject.org/infusion/standalone-demos/pager/html/pager.html>

        