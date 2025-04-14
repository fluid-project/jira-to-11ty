---json
{
  "title": "DECA-90",
  "summary": "Single attached camera not listed in detection dialog",
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
  "date": "2010-03-31T20:33:00.000-0400",
  "updated": "2010-03-31T20:34:41.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-03-31T20:34:41.000-0400",
      "body": "Sorry, not a bug.\n"
    }
  ]
}
---
If a single camera is attached (regardless of whether it is supported or not), it is not listed in the Detection dialog.

If the Detection dialog appears, it should always list what it has detected: supported, and unsupported cameras.

        