---json
{
  "title": "INFRA-129",
  "summary": "Update F26 box",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-28T09:55:55.715-0500",
  "updated": "2018-02-28T11:16:06.874-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-28T11:16:06.871-0500",
      "body": "New box version 20180228. Tested with GPII/universal successfully:\n\n```\nNode:\r\n16:07:27.870:  jq: ***************\r\n16:07:27.870:  jq: All tests concluded: 952/952 total passed in 201719ms - PASS\r\n16:07:27.870:  jq: ***************\r\n\r\nBrowser:\r\n1..146\r\n# tests 146\r\n# pass  146\r\n# skip  0\r\n# fail  0\n```\n"
    }
  ]
}
---
GPII/universal is still using it (pending PR to switch to F27 but no progress).

        