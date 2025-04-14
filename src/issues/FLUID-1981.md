---json
{
  "title": "FLUID-1981",
  "summary": "Cancel button disappears once uploading starts, never to appear again.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-12-15T19:20:07.000-0500",
  "updated": "2008-12-18T10:54:07.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T10:54:07.000-0500",
      "body": "the cancel button was removed\n"
    }
  ]
}
---
The Uploader's cancel button isn't quite ready for prime time. It is hidden when uploading starts, but never reappears again. Let's remove it for Infusion 0.6--a user could still successfully add their own if desired--and come back to it post-release.

        