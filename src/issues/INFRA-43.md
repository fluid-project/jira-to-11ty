---json
{
  "title": "INFRA-43",
  "summary": "Split packer/centos7 vagrant and KVM code",
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
  "date": "2015-09-17T15:31:04.813-0400",
  "updated": "2016-08-22T15:40:44.763-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:55:41.101-0400",
      "body": "Public CentOS Vagrant image: <https://github.com/idi-ops/packer-centos>\n\nInternal CentOS KVM image: <https://github.com/inclusive-design/packer-centos-idrc>\n"
    }
  ]
}
---
Outside partners are starting to use the inclusivedesign/centos7 Vagrant box and right now the repository with the Packer/Ansible code is in our private ops repository.

We need to make the Vagrant portion public, while keeping the KVM portion private (unless there are no concerns with making our internal image public).&#x20;

It likely requires we copy all files except centos7-kvm.conf and http/ks-kvm.cfg, that are specific to KVM.

        