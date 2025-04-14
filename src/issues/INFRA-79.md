---json
{
  "title": "INFRA-79",
  "summary": "Jenkins automation for containerized GPII components",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-12-21T10:59:24.165-0500",
  "updated": "2016-07-19T09:51:43.387-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/INFRA-59/",
      "key": "INFRA-59",
      "summary": "Create a Docker image for our version of CouchDB"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-62/",
      "key": "INFRA-62",
      "summary": "Build Preferences Server container using ansible-nodejs role"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-66/",
      "key": "INFRA-66",
      "summary": "Build a new container for Flow Manager"
    }
  ],
  "attachments": [],
  "comments": []
}
---
With the base Jenkins + Docker environments in place, we'll need to build a number of further automation pieces:

* Jenkins jobs for building and deploying the required containers. At this time we expect this to be docker-centos, docker-nodejs, Universal, Preferences Server, Flow Mananger, and a couchdb container (we expect to use the <https://github.com/gpii/universal/tree/review4> branch as the source of these, but should confirm)
* Basic integrity testing of newly-built containers, followed by pushing them to Docker Hub
* Automated replacement of the running containers with new versions

All of the above should be versioned using Jenkins job builder, similar to our other jobs.

Related issue from the GPII Jira instance:

* <https://issues.gpii.net/browse/GPII-1536>

        