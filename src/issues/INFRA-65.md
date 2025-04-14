---json
{
  "title": "INFRA-65",
  "summary": "Rebuild our nodejs Docker image using the Ansible approach",
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
  "date": "2015-11-24T14:43:45.989-0500",
  "updated": "2015-11-27T16:21:04.198-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-64/",
      "key": "INFRA-64",
      "summary": "Add Ansible-related features to Docker inclusivedesign/centos"
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
      "date": "2015-11-27T16:13:30.100-0500",
      "body": "<https://github.com/idi-ops/docker-nodejs/pull/2>\n"
    }
  ]
}
---
This Docker container should also be rebuilt using the Ansible-based approach once we're ready: \
<https://github.com/idi-ops/docker-nodejs>

Then further container images of specific GPII applications should be based off this + Ansible roles

        