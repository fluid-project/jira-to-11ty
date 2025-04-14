---json
{
  "title": "INFRA-147",
  "summary": "Use Docker CE in Vagrant boxes",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-21T10:24:58.440-0400",
  "updated": "2018-06-21T15:04:53.441-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-22T15:48:30.822-0400",
      "body": "Released version 20180322 of the centos7 and fedora27 boxes.\n"
    }
  ]
}
---
Docker CE introduced [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/) which can help to simplify builds and deploying apps.

Investigate if we can use Docker CE without major downsides in our projects.

        