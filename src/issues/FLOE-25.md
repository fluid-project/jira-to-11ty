---json
{
  "title": "FLOE-25",
  "summary": "When existing ToC is present, UIO ToC setting should work with that ToC, not our own",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2012-05-28T16:12:47.461-0400",
  "updated": "2012-08-16T14:48:29.375-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2012-08-16T14:48:29.374-0400",
      "body": "Looks working on production.\n"
    }
  ]
}
---
In the Authoring environment and when viewing content created by Auth tool, there is a table of contents as part of the content. In these cases, the UIO Table of contents setting should affect this existing table of contents, and should not add another one

        