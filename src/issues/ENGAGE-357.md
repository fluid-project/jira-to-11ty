---json
{
  "title": "ENGAGE-357",
  "summary": "Implement a component allowing users to view and edit comments and notes on Artifacts and Exhibitions",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2010-02-08T17:26:59.000-0500",
  "updated": "2010-02-22T17:12:28.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Comments"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T17:27:22.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T00:21:12.000-0500",
      "body": "The Guestbook and comments pages are now working in trunk!\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-19T00:58:43.000-0500",
      "body": "Antranig's last commit for this issue came after I sent my trunk freeze email due to an oversight on my part. I've reviewed his r9456 fix and it looks good.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-22T17:12:28.000-0500",
      "body": "Tested on 02/22/2010, 4:37 PM EST.\n\nLooks good, with one minor issue: \"Abuse reported\" text is a non-functioning link (should non-functioning text). I've filed that under <https://fluidproject.atlassian.net/browse/ENGAGE-436#icft=ENGAGE-436>.\n\nClosing this issue.\n"
    }
  ]
}
---
Both the Exhibition screens and the Artifact View page include support for user comments. On the Exhibition page, these are framed as "notes" in a "Guest book," while they are "Comments" on the Artifact page. We need a component that will allow users to both view and edit these comments.

        