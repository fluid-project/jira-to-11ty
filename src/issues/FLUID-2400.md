---json
{
  "title": "FLUID-2400",
  "summary": "The basic version of Pager throws an error on load.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-03-25T11:28:09.000-0400",
  "updated": "2009-03-25T11:55:25.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-03-25T11:32:21.000-0400",
      "body": "Fixed at revision 6841\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T11:48:46.000-0400",
      "body": "Reviewed. The only change was importing DataBinding.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:55:25.000-0400",
      "body": "Verified fix using\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The basic version of Pager throws an error on load.

Error: Object doesn't support this property or method\
Line: 706\
File: Pager.js

        