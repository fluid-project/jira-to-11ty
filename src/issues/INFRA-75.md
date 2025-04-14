---json
{
  "title": "INFRA-75",
  "summary": "Split out Preferences Server data loading from main Preferences Server Ansible role",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-12-10T09:30:21.887-0500",
  "updated": "2015-12-10T13:43:27.237-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-73/",
      "key": "INFRA-73",
      "summary": "Assess removing supervisor from Docker container images in favour of Docker run restart policies"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-12-10T13:43:27.235-0500",
      "body": "<https://github.com/waharnum/ansible-preferences-server-data-loader> & <https://github.com/waharnum/docker-preferences-server-data-loader> done - awaiting review now.\n"
    }
  ]
}
---
This is needed to make it possible for us to use Docker restart policies instead of supervisor for managing containerized application restarts.

See the related <https://fluidproject.atlassian.net/browse/INFRA-73#icft=INFRA-73> issue for more details.

        