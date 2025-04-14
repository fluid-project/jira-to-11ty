---json
{
  "title": "INFRA-58",
  "summary": "Implementation of persistent storage model for CouchDB on Kubernetes",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Alan Harnum",
  "date": "2015-11-02T12:51:48.055-0500",
  "updated": "2017-09-21T10:31:43.391-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-59/",
      "key": "INFRA-59",
      "summary": "Create a Docker image for our version of CouchDB"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:31:43.389-0400",
      "body": "This was created for a demo cluster back in 2015 but we ended up choosing a different solution at the time. Closing ticket to document this and will open new ones for other automation work I'll need to do.\n"
    }
  ]
}
---
For the demo, we'll want to have a running instance of CouchDB able to persist its data between restarts of the container under Kubernetes

        