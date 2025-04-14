---json
{
  "title": "INFRA-42",
  "summary": "rsyslog cannot bind to port 2514 (RELP) with SELinux enabled",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-09-09T13:59:49.939-0400",
  "updated": "2016-08-22T15:40:49.643-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T14:08:38.031-0400",
      "body": "Red Hat says even though 2514 is \"suggested\" by the RELP protocol, it's not a standard port and they won't be support it.\n\nWe've been running RELP over the standard syslog port without problems.\n"
    }
  ]
}
---
Port 2514 is used by the RELP protocol and syslog cannot bind to it when SELinux is enabled in enforcing mode.

Our log servers are running in permissive mode and this needs to be fixed.&#x20;

Port 2514 is suggested by the documentation but it's not a standard port so Red Hat refused to add it to the list of syslog ports.

        