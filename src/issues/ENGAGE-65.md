---json
{
  "title": "ENGAGE-65",
  "summary": "Implement rendering of cabinet drawers containing the various navigation lists",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-09-11T18:04:13.000-0400",
  "updated": "2009-11-03T11:49:12.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-21T16:38:18.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-29T09:20:52.000-0400",
      "body": "I just made a commit (r8149), the issue number was correct, but the message wasn't.\n\nIt read: \"Had erroneously left in the titles as cabinet instead of renaming to browse. This is now fixed.\"\n\nBut should have been.\n\n\"Updated the client side in preparation for pulling data from the server\"&#x20;\n\nThe error was caused by accidentally hitting \"Ok\" instead of \"Cance\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T16:48:18.000-0400",
      "body": "Justin and Yura have done a great job implementing this for Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:49:12.000-0500",
      "body": "Close as per previous comment\n"
    }
  ]
}
---
Implement rendering of cabinet drawers containing the various navigation lists

Render the markup that the cabinet will use as drawers.

        