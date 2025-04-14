---json
{
  "title": "INFRA-31",
  "summary": "Ansible role: iptables",
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
  "date": "2015-08-18T13:47:10.581-0400",
  "updated": "2016-08-22T15:27:41.474-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-18T13:57:54.223-0400",
      "body": "Deployed in production: <https://github.com/inclusive-design/ops/tree/master/ansible/roles/iptables>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T09:33:16.205-0400",
      "body": "Added iptables\\_nat and iptables\\_nat\\_device options to configure masquerading. It's currently used with the VPN servers.\n"
    }
  ]
}
---
Basic iptables configuration based on a default=block policy.

        