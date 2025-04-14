---json
{
  "title": "INFRA-71",
  "summary": "Rebuild gpii-universal Docker image using Ansible nodejs role",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-27T16:16:14.347-0500",
  "updated": "2015-12-21T11:20:12.783-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-63/",
      "key": "INFRA-63"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-60/",
      "key": "INFRA-60"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-62/",
      "key": "INFRA-62"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-66/",
      "key": "INFRA-66"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-12-04T15:31:59.307-0500",
      "body": "PR open for this at <https://github.com/gpii-ops/docker-universal/pull/1>\n"
    }
  ]
}
---
Given the number of GPII applications that are Universal running in different configurations, it makes sense to follow the existing container paradigm for running them by creating a base Universal container (<https://github.com/gpii-ops/docker-universal>) first.

Subsequent application containers for the preference server, etc can simply then use that image - this is how things are currently done.

        