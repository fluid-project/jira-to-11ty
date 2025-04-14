---json
{
  "title": "INFRA-96",
  "summary": "Implement Intrusion detection",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2017-11-10T11:39:00.952-0500",
  "updated": "2017-11-10T11:39:57.378-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-11-10T11:39:57.376-0500",
      "body": "Snort enabled on the pfSense firewall.\n\nLogs are sent to the central log servers (i-0001/0002 currently, /var/log/hosts/gateway) and monitoring/alerting of those entries should be implemented separately in the future.\n"
    }
  ]
}
---
Implement some kind of intrusion detection system on our firewall (snort, suricata, etc.)

        