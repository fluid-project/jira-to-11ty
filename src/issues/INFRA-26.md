---json
{
  "title": "INFRA-26",
  "summary": "Ansible role: Mail relay",
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
  "date": "2015-08-18T13:45:18.466-0400",
  "updated": "2015-09-04T10:13:54.147-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-18T13:57:37.628-0400",
      "body": "Deployed in production: <https://github.com/inclusive-design/ops/tree/master/ansible/roles/postfix_relay>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T10:13:54.136-0400",
      "body": "Role has been pretty stable at this point.\n"
    }
  ]
}
---
Configures a Postfix to act as internal mail relay server.

        