---json
{
  "title": "INFRA-62",
  "summary": "Build Preferences Server container using ansible-nodejs role",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-24T12:53:51.748-0500",
  "updated": "2016-07-19T09:51:55.545-0400",
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
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-79/",
      "key": "INFRA-79"
    }
  ],
  "attachments": [],
  "comments": []
}
---
We want to start building our containers using the same Ansible roles we use in other contexts. Some work has gone on for this at <https://github.com/waharnum/docker-preferences-server/> already; it should be verified and moved into our master repo

        