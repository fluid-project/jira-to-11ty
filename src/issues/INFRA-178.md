---json
{
  "title": "INFRA-178",
  "summary": "Update all servers to CentOS 7.5",
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
  "date": "2018-05-10T06:05:47.889-0400",
  "updated": "2018-05-10T20:12:10.729-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-10T08:12:52.580-0400",
      "body": "Faced this issue upgrading i-0023: <https://access.redhat.com/discussions/3411171>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-10T20:12:10.724-0400",
      "body": "All IDRC hosts updated to CentOS 7.5 (kernel 3.10.0-862.2.3)\n\nDev/Prod VMs:\n\ni-0001.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0002.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0003.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0004.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0005.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0006.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0008.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0009.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0010.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0012.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0013.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0014.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0015.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0016.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0018.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0023.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0033.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0035.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0036.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0037.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0038.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0041.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\ni-0042.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\n\nKVM hypervisors:\n\nh-0001.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\nh-0002.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\nh-0003.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\nh-0004.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\\\nh-0006.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.2.3.el7.x86\\_64\n"
    }
  ]
}
---
<https://lists.centos.org/pipermail/centos-announce/2018-May/022829.html>

        