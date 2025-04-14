---json
{
  "title": "INFRA-114",
  "summary": "Create Ansible role to manage TCP/UDP load balancing with nginx",
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
  "date": "2018-02-08T11:39:33.393-0500",
  "updated": "2018-03-09T13:19:17.941-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-08T11:40:35.793-0500",
      "body": "Modified nginx-common role to support streams: <https://github.com/inclusive-design/ops/commit/49e49f2c26e4efd0d604c4c4596c0488421e9197>\n\nAdded new nginx-stream role: <https://github.com/inclusive-design/ops/commit/bb445be3706d55699093085ee98f6147b6b1dc4b>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-09T13:19:09.557-0500",
      "body": "This seems to be working fine with the Dev K8s cluster. I'm going to close it for now but the real test will come when we deploy Rancher 2.0 (nginx will front the Ingress LB).\n"
    }
  ]
}
---
Besides HTTP/HTTPS, nginx can also load balance TCP/UDP raw streams. We need a way to automatically configure that.

        