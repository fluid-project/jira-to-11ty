---json
{
  "title": "INFRA-201",
  "summary": "docker-compose stacks don't start after reboot",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Giovanni Tirloni",
  "date": "2018-07-19T22:08:09.995-0400",
  "updated": "2018-09-18T11:34:43.514-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-09-18T11:34:43.514-0400",
      "body": "Added \"restart:always\" as a service policy in the compose definition files, as per <https://github.com/inclusive-design/website-cities/blob/4a244dbf6528285a4050cdd9cfc4178cd3897889/docker-compose.yml#L7>\n"
    }
  ]
}
---
Following a reboot, the containers that work started by \`docker-compose up\` are not started.

Workaround: trigger Jenkins jobs.

        