---json
{
  "title": "ENGAGE-437",
  "summary": "My Collection implicitly limits users to 25 artifacts per collection, due to how we have configured our CouchDB/Lucene query",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Colin Clark",
  "date": "2010-02-22T18:08:41.000-0500",
  "updated": "2010-02-22T19:49:43.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-22T18:08:50.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-22T19:46:48.000-0500",
      "body": "I have committed a fix for this at r9476. Antranig, can you review and close the issue you approve?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-22T19:49:43.000-0500",
      "body": "I approve this change, and we collectively note that this Lucene view must be destroyed in due time.\n"
    }
  ]
}
---
It appears that users are limited to only being able to see 25 artifacts within their collection. If they collect more, they will only see 25 (probably the first, but it's ambiguous).

This can be fixed by providing a value for the limit parameter sent to My Collection's Lucene view.

        