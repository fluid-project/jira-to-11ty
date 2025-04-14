---json
{
  "title": "FLUID-914",
  "summary": "Quick clicking Inline Edit field flips between activated/deactivated states, using Opera 9.5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2008-07-16T15:08:52.000-0400",
  "updated": "2008-12-19T08:18:38.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-28T11:30:45.000-0400",
      "body": "Currently it only flips back and forth once now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-19T08:18:38.000-0500",
      "body": "Appears to have been fixed\n\nTested Using:\\\nOpera 9.5 (Win XP)&#x20;\n"
    }
  ]
}
---
Quickly clicking on the inline edit field activates/deactivates it, instead of activating and selecting text.

work around, click and wait a second. This will allow double click and triple click to work properly

Steps to reproduce:

1\) Open the inline edit example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Place the pointer over one of the inline edit fields

3\) Quickly click the inline edit field. Notice that it activate/deactivates rapidly with the clicks

        