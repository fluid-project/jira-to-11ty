---json
{
  "title": "INFRA-88",
  "summary": "Secret management for apps",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2016-08-18T12:29:41.848-0400",
  "updated": "2018-01-23T09:02:06.040-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
We should have a mechanism that allows applications to programatically retrieve secrets (passwords, passphrases, tokens, etc) without having to store them locally or hardcoded.

Ideally this should allow apps to retrieve these secrets through an API, environment variables or ephemeral local files mounted at run time.

        