---json
{
  "title": "INFRA-117",
  "summary": "CentOS KVM template fails to build (\"packer_builder_type=qemu could not be found\")",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-02-19T13:44:42.413-0500",
  "updated": "2018-02-19T14:44:54.055-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-02-19T14:14:51.584-0500",
      "body": "This is a regression is Packer 1.2.0: <https://github.com/hashicorp/packer/issues/5885>\n"
    }
  ]
}
---
```
==> template-centos74-x86_64: Provisioning with Ansible...
    template-centos74-x86_64: Uploading Playbook directory to Ansible staging directory...
    template-centos74-x86_64: Creating directory: /tmp/packer-provisioner-ansible-local/5a8b1901-f1ef-d903-ee68-a6a7f05a832c
    template-centos74-x86_64: Uploading main Playbook file...
    template-centos74-x86_64: Uploading inventory file...
    template-centos74-x86_64: Executing Ansible: cd /tmp/packer-provisioner-ansible-local/5a8b1901-f1ef-d903-ee68-a6a7f05a832c && ANSIBLE_FORCE_COLOR=1 PYTHONUNBUFFERED=1 ansible-playbook /tmp/packer-provisioner-ansible-local/5a8b1901-f1ef-d903-ee68-a6a7f05a832c/playbook.yml --extra-vars \"packer_build_name=template-centos74-x86_64 packer_builder_type=qemu packer_http_addr=10.0.2.2:8574\"  -c local -i /tmp/packer-provisioner-ansible-local/5a8b1901-f1ef-d903-ee68-a6a7f05a832c/packer-provisioner-ansible-local959736520
    template-centos74-x86_64: ERROR! the playbook: packer_builder_type=qemu could not be found
==> template-centos74-x86_64: Deleting output directory...
Build 'template-centos74-x86_64' errored: Error executing Ansible: Non-zero exit status: 1
```

        