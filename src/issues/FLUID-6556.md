---json
{
  "title": "FLUID-6556",
  "summary": "Node.js 14.x is becoming LTS soon",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-10-01T16:02:35.104-0400",
  "updated": "2024-07-22T10:35:16.441-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
CI needs to be updated to test against Node.js 14.x

Also, Node.js 10.x needs to be dropped because 1) it's in maintenance mode since April '20 and 2) because testing against 3 node versions on 3 operating systems will make the tests take a long time (consuming our free credits).

LTS schedule: <https://nodejs.org/en/about/releases/>

        