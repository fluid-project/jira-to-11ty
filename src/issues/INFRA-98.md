---json
{
  "title": "INFRA-98",
  "summary": "nginx-php and -static roles should allow SSH access (configurable)",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Avtar Gill",
  "date": "2017-12-12T15:51:47.940-0500",
  "updated": "2017-12-12T16:48:27.579-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-12-12T16:48:27.574-0500",
      "body": "nginx-static - <https://github.com/inclusive-design/ops/commit/f06f098b148dcb3636fc0dd7b1136782fcfbc263>\\\nnginx-php - <https://github.com/inclusive-design/ops/commit/872df47f83f62e81c13ea9b20d5ada183a9ca16f>\n"
    }
  ]
}
---
This is needed so rsync can run over SSH for deployments.

        