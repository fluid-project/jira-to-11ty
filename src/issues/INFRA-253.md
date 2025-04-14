---json
{
  "title": "INFRA-253",
  "summary": "mysql: binlog_format should be MIXED",
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
  "date": "2020-05-19T14:38:54.011-0400",
  "updated": "2020-05-19T17:12:58.232-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-19T17:12:58.232-0400",
      "body": "This was required by nextCloud.\n"
    }
  ]
}
---
SET GLOBAL binlog\_format='MIXED';

The mysql role needs to be modified to set binlog\_format in the config directly

        