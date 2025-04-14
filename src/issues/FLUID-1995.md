---json
{
  "title": "FLUID-1995",
  "summary": "Mouse cursor does not change its \"drag\" icon over non-sortable list items",
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
  "date": "2008-12-16T16:32:47.000-0500",
  "updated": "2011-01-14T09:53:25.187-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "XP - FF3, IE7, Opera 9.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-30T11:02:07.000-0500",
      "body": "Appears to have been fixed\n\nTested using:\n\nFF3, Opera 9.5, IE6 (Win XP)\\\nIE 7, FF3 (Win Vista)\n"
    }
  ]
}
---
The mouse cursor icon is not changed from its "drag" icon (four pointed arrow) when it is moved over a non-sortable item in the vertical list.

        