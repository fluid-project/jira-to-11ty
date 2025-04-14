---json
{
  "title": "INFRA-131",
  "summary": "CentOS public mirror contains temporary files that lead to rsync errors",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-05T13:48:42.374-0500",
  "updated": "2018-03-05T13:51:27.693-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-05T13:51:27.679-0500",
      "body": "Excluded .<sub>tmp</sub> files from mirroring.\n"
    }
  ]
}
---
.<sub>tmp</sub> files and Permission Denied errors while running mirror.sh

        