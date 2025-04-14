---json
{
  "title": "ENGAGE-369",
  "summary": "The My Collection markup spout makes museum-specific assumptions about the structure of raw artifact documents",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Colin Clark",
  "date": "2010-02-10T12:33:27.000-0500",
  "updated": "2017-12-22T09:44:27.953-0500",
  "versions": [
    "0.1",
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:27.951-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
The My Collection server-side code makes a fatal assumption about the format of artifact data, and is hard-coded to only work with McCord's data.

This is, ultimately, due to <https://fluidproject.atlassian.net/browse/ENGAGE-368#icft=ENGAGE-368>, where we have incorrectly boxed up transformation logic in standard Couch views. Since My Collection uses a lucene view, it ends up returned artifact documents in a different format than the standard view.

We'll have to live with this bug for Engage 0.3b, but we need to completely rewrite the whole Engage mapping layer soon, as documented in <https://fluidproject.atlassian.net/browse/ENGAGE-367#icft=ENGAGE-367>.

        