---json
{
  "title": "INFRA-63",
  "summary": "Add gpii-preferences-server Ansible role to master",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-24T12:55:30.278-0500",
  "updated": "2015-12-04T15:31:24.364-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-71/",
      "key": "INFRA-71",
      "summary": "Rebuild gpii-universal Docker image using Ansible nodejs role"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-60/",
      "key": "INFRA-60"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-12-04T15:31:24.361-0500",
      "body": "I've transferred the repo to <https://github.com/gpii-ops/ansible-gpii-preferences-server>\n\nAvtar Gill / Giovanni Tirloni, could one of you review?\n"
    }
  ]
}
---
The work that's gone on at <https://github.com/waharnum/ansible-gpii-preferences-server> should be validated and added to the master application roles at <https://github.com/idi-ops/>

        