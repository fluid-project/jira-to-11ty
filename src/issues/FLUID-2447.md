---json
{
  "title": "FLUID-2447",
  "summary": "Layout columns not extend to flush right",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Escalated",
  "assignee": "Jacob Farber",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T12:46:15.000-0400",
  "updated": "2014-06-25T16:16:11.092-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": "XP, Opera 9.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-04-01T13:33:01.000-0400",
      "body": "This issue is due mostly to the nature of sub-pixel rounding in browsers:\n\n<http://ejohn.org/blog/sub-pixel-problems-in-css/>\n\nWhats happening is some browsers have less leftover space than others, due to the different alogrithms they use to evaluate sub-pixels.\n\nA workaround is if you dont absolutely need flexible columns with gutters, you could use flexible containers which have less data for rounding errors and should fit \"tighter\"\n"
    }
  ]
}
---
FSS.Layout.Columns of the flexible type do not extend to the right margin of the browser page - there is "leftover" black space on far right, with the amount varying depending on the # of columns. The amount of wasted space is proportional to the width of the browswer window.

        