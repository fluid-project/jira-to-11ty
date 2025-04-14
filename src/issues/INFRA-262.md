---json
{
  "title": "INFRA-262",
  "summary": "August 2020 - CentOS Security Updates",
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
  "date": "2020-08-11T11:24:24.371-0400",
  "updated": "2020-10-13T11:29:11.288-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-08-15T09:55:42.198-0400",
      "body": "```\n$ ansible -i environments/production/ -m shell -a \"uname -r\" --one-line all\r\ni-0016.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0036.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0018.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0013.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0015.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0035.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0033.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0014.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0005.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0008.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0019.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0006.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0010.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0043.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0023.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0012.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0041.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0004.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0042.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0003.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0002.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0009.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0001.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\n\r\n\r\n$ ansible -i environments/dev -m shell -a \"uname -r\" --one-line all\r\ni-0105.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0106.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0104.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0103.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0102.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\ni-0101.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\n\r\n\r\n$ ansible -i environments/x-hypervisors/ -l kvm -m shell -a \"uname -r\" --one-line all\r\nh-0004.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\nh-0006.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\nh-0001.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\r\nh-0002.tor1.incd.ca | CHANGED | rc=0 | (stdout) 3.10.0-1127.18.2.el7.x86_64\n```\n"
    }
  ]
}
---

        