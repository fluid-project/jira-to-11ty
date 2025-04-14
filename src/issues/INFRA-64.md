---json
{
  "title": "INFRA-64",
  "summary": "Add Ansible-related features to Docker inclusivedesign/centos",
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
  "date": "2015-11-24T14:38:34.130-0500",
  "updated": "2015-12-08T07:34:25.954-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-60/",
      "key": "INFRA-60"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-65/",
      "key": "INFRA-65"
    }
  ],
  "attachments": [],
  "comments": []
}
---
We want to update our Docker base image at <https://hub.docker.com/r/inclusivedesign/centos/> as follows:

* add Ansible and sudo as at <https://github.com/waharnum/docker-preferences-server/blob/master/Dockerfile.aharnum.universal>
* remove the install of glibc-2.17-55.el7\_0.5

We can then use this as the base image for building and running containers using Ansible.

        