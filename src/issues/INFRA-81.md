---json
{
  "title": "INFRA-81",
  "summary": "Improve container logging and metrics",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Alan Harnum",
  "date": "2015-12-21T11:28:09.504-0500",
  "updated": "2018-01-23T09:06:38.458-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-01-23T09:06:38.456-0500",
      "body": "Closing this ticket in favor of a more detailed / specific one for Prometheus.\n"
    }
  ]
}
---
We've discussed a number of possibilities for this. For January our goal should be easier debugging and recording of events - possibly using <https://github.com/gliderlabs/logspout> to route the container logs to the syslog server.

        