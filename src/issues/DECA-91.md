---json
{
  "title": "DECA-91",
  "summary": "Detected Camera dialog should say \"None\" if no cameras detected.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-03-31T20:45:38.000-0400",
  "updated": "2010-06-16T11:11:35.196-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-16T11:11:35.194-0400",
      "body": "Replaced by new design.\n"
    }
  ]
}
---
If no cameras are detected on the system, the Camera Detection dialog should state that it did not find any cameras attached. Currently, it does not.

        