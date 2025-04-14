---json
{
  "title": "SJRK-427",
  "summary": "Node.js CVE-2020-8277",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-11-16T11:59:30.779-0500",
  "updated": "2020-11-23T16:15:38.010-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
<https://nodejs.org/en/blog/vulnerability/november-2020-security-releases/>

Denial of Service through DNS request (CVE-2020-8277)

A Node.js application that allows an attacker to trigger a DNS request for a host of their choice could trigger a Denial of service by getting the application to resolve a DNS record with a larger number of responses.

        