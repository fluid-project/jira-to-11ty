---json
{
  "title": "FLUID-1988",
  "summary": "tab character insertion in editable field is broken",
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
  "date": "2008-12-16T12:58:11.000-0500",
  "updated": "2011-01-14T09:53:26.556-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "XP, IE7,FF3, Opera 9.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T10:49:48.000-0500",
      "body": "To perform this task you have to cut and past a string of text containing a tab character. Typing the 'tab' key on the keyboard should save and exit the inline edit field.\n"
    }
  ]
}
---
Simple inline edit: editing the text by typing in some number of characters separated by tabs does not work - when the tab key is pressed the focus is jumped to the next editable field on the page.

        