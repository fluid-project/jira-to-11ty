---json
{
  "title": "DECA-46",
  "summary": "Change page numbering to account for spreads.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Boyan Sheytanov",
  "reporter": "Boyan Sheytanov",
  "date": "2010-02-24T08:48:29.000-0500",
  "updated": "2010-04-12T13:07:46.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Page numbering currently counts 1, 2, 3, etc. Since we will be working with page spreads, this has to be changed to 1-2, 3-4, 5-6, etc. There should be additional way to keep the item index (needed for reordering and syncing of model to and from server).

        