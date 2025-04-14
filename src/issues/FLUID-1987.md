---json
{
  "title": "FLUID-1987",
  "summary": "Simple text edit: undo edit link does not appear",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2008-12-16T12:18:43.000-0500",
  "updated": "2011-01-14T09:53:26.346-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T12:05:18.000-0400",
      "body": "Need to implement at least some of the inline edit fields with undo. If, only some implement undo, they should be marked on the page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-04T09:31:22.000-0400",
      "body": "This was fixed with the update to the quick start example\n"
    }
  ]
}
---
After a simple text inline edit has been completed and the mouse clicked outside the edit window to "close" it, no "undo edit" link appears as per testing requirement:

"An 'undo edit' link should appear next to the inline editable text "

        