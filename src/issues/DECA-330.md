---json
{
  "title": "DECA-330",
  "summary": "Capture should handle failure to Delete gracefully",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-10-15T10:56:37.111-0400",
  "updated": "2012-12-03T10:49:10.484-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
If Delete fails for whatever reason, the dewarp UI should fail gracefully. Currently this error is unhandled.

        