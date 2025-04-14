---json
{
  "title": "DECA-331",
  "summary": "Capture should fail gracefully if Export fails",
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
  "date": "2012-10-15T11:03:05.436-0400",
  "updated": "2012-12-03T10:48:59.129-0500",
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
The Capture component should degrade gracefully if Export fails. Currently this error is unhandled.

        