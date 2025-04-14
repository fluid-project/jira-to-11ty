---json
{
  "title": "INFRA-250",
  "summary": "CentOS 8 - Error bootstrapping new VM",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-05-18T12:02:32.932-0400",
  "updated": "2020-06-29T09:59:05.717-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
```
TASK [sshd : Install packages] *****************************************************************************************
failed: [i-1000.tor1.incd.ca] (item=openssh-server) => {"ansible_loop_var": "item", "changed": false, "item": "openssh-server", "msg": "Failed to download metadata for repo 'managed__centos-base'", "rc": 1, "results": []}
failed: [i-1000.tor1.incd.ca] (item=policycoreutils-python) => {"ansible_loop_var": "item", "changed": false, "item": "policycoreutils-python", "msg": "Failed to download metadata for repo 'managed__centos-base'", "rc": 1, "results": []}
```

        