---json
{
  "title": "FLUID-1620",
  "summary": "Wide gap between inline edit fields when in edit mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-09-25T15:50:08.000-0400",
  "updated": "2008-10-02T11:23:05.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3 (Mac OS 10.4)\\\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-10-02T11:01:23.000-0400",
      "body": "converted divs to spans to avoid display:block problems with show/hide\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-02T11:23:05.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Wide gap between inline edit fields when in edit mode

Steps to reproduce:

1\) Open the Sakia inline edit example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Activate one of the first two inline edit fields

Notice that the gap between the activated inline edit field and the one below it has increased in size.

        