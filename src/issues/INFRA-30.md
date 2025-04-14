---json
{
  "title": "INFRA-30",
  "summary": "Ansible role: KVM virtual machine",
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
  "date": "2015-08-18T13:46:46.946-0400",
  "updated": "2015-09-04T10:13:30.815-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-08-18T13:57:51.827-0400",
      "body": "Deployed in production: <https://github.com/inclusive-design/ops/tree/master/ansible/roles/libvirt_vm>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T10:13:30.813-0400",
      "body": "Role has been pretty stable at this point.\n"
    }
  ]
}
---
Role should take care of the lifecycle of a virtual machine (launch, terminate, start and stop).

        