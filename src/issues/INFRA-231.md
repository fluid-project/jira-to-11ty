---json
{
  "title": "INFRA-231",
  "summary": "Update servers to CentOS 7.7",
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
  "date": "2020-04-09T08:58:55.276-0400",
  "updated": "2020-04-11T12:59:45.878-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-09T09:01:32.823-0400",
      "body": "CC Colin Clark Alan Harnum just a heads up I'll be working on this.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-09T10:10:15.119-0400",
      "body": "Updated:\n\ni-0023.tor1.incd.ca\\\ni-0041.tor1.incd.ca\\\ni-0042.tor1.incd.ca\\\ni-0001.tor1.incd.ca\\\ni-0002.tor1.incd.ca\\\ni-0003.tor1.incd.ca\\\ni-0004.tor1.incd.ca\\\ni-0009.tor1.incd.ca\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-11T06:00:54.967-0400",
      "body": "Updated:\n\ni-0035\\\ni-0036\\\ni-0013\\\ni-0018\\\ni-0015\\\ni-0005\\\ni-0010\\\ni-0012\n\nCurrent status:\n\n```\ni-0001.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0002.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0003.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0004.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0005.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0006.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.6.1810 (Core) \r\ni-0008.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.6.1810 (Core) \r\ni-0009.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0010.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0012.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0013.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0014.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.6.1810 (Core) \r\ni-0015.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.6.1810 (Core) \r\ni-0016.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.6.1810 (Core) \r\ni-0018.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0019.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.6.1810 (Core) \r\ni-0023.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0033.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.6.1810 (Core) \r\ni-0035.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0036.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0041.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0042.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-11T12:59:33.545-0400",
      "body": "```\ni-0001.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0002.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0003.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0004.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0005.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0006.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0008.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0009.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0010.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0012.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0013.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0014.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0015.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0016.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0018.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0019.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0023.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0033.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0035.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0036.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0041.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\r\ni-0042.tor1.incd.ca | CHANGED | rc=0 | (stdout) CentOS Linux release 7.7.1908 (Core)\n```\n"
    }
  ]
}
---
<https://wiki.centos.org/Manuals/ReleaseNotes/CentOS7.1908>

        