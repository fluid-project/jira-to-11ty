---json
{
  "title": "INFRA-78",
  "summary": "Build new Docker hosts with Jenkins automation",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Alan Harnum",
  "date": "2015-12-21T10:48:21.754-0500",
  "updated": "2017-01-13T12:02:02.322-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-01-13T12:02:02.319-0500",
      "body": "The situation has evolved and currently this would be accomplished by applying these roles to the host:\n\n* <https://github.com/idi-ops/ansible-jenkins-node>\n* <https://github.com/idi-ops/ansible-docker>\n"
    }
  ]
}
---
Making this issue to track moving from the old container infrastructure on the Nebula cluster to the new one running on the mini-cluster.

Expected end product VMs:

* 1 Staging host
* 2 (redundant, for load balancing) production hosts

Jenkins is expected to be able to communicate with the hosts to build and run Docker containers - our goal is to provide a better interface (for both ourselves and the GPII developers) to deploy and run containerized components of the GPII infrastructure.

This may use the refactor Docker role being worked on by Alfredo: <https://issues.gpii.net/browse/GPII-1537>

        