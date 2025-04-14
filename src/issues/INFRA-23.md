---json
{
  "title": "INFRA-23",
  "summary": "Ansible role: rsyslog",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-18T13:43:56.189-0400",
  "updated": "2016-08-22T10:14:12.959-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-18T13:57:26.162-0400",
      "body": "Deployed in production: <https://github.com/inclusive-design/ops/tree/master/ansible/roles/rsyslog>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T10:14:12.957-0400",
      "body": "In production for over a year now.\n"
    }
  ]
}
---
Install and configures rsyslog server to act as central logging server collecting logs from other servers.

        