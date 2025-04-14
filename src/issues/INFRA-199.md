---json
{
  "title": "INFRA-199",
  "summary": "[RHSA-2018:1965-01] Important: kernel security and bug fix update",
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
  "date": "2018-07-16T11:32:36.891-0400",
  "updated": "2018-07-19T21:59:52.289-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-07-19T21:59:52.249-0400",
      "body": "All IDRC servers updated and rebooted.\n\n```\ni-0001.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0002.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0003.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0004.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0005.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0006.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0008.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0009.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0010.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0012.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0013.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0014.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0015.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0016.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0018.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0023.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0033.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0035.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0036.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0037.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0038.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0041.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0042.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0045.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0070.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0071.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0072.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0080.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0081.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0082.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0083.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0084.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0085.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0090.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0091.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0092.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0093.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0094.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0095.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0100.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0101.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0102.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0103.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0104.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\r\ni-0105.tor1.inclusivedesign.ca | CHANGED | rc=0 | (stdout) 3.10.0-862.9.1.el7.x86_64\n```\n"
    }
  ]
}
---
<https://www.redhat.com/archives/rhsa-announce/2018-June/msg00037.html>

        