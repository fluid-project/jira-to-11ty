---json
{
  "title": "KETTLE-65",
  "summary": "November 2017 update to address inherited security vulnerabilities...",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-11-14T13:20:46.513-0500",
  "updated": "2017-11-22T04:13:38.653-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-22T04:13:38.635-0500",
      "body": "Antranig Basman handled the security updates in fixing <https://fluidproject.atlassian.net/browse/FLUID-6225#icft=FLUID-6225>.\n"
    }
  ]
}
---
[Snyk](http://snyk.io) is reporting inherited vulnerabilities coming in via Kettle, mainly via its outdated express.  I am in the process of creating a quick PR to address this.

cc: Antranig Basman

        