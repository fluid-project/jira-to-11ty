---json
{
  "title": "DECA-22",
  "summary": "Add support for jobs to Decapod server",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Boyan Sheytanov",
  "reporter": "Boyan Sheytanov",
  "date": "2010-01-14T04:22:23.000-0500",
  "updated": "2012-06-08T12:10:28.572-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-25/",
      "key": "DECA-25",
      "summary": "Stitching and other post-capture processing should run asynchronously "
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Boyan Sheytanov",
      "date": "2010-03-15T09:51:37.000-0400",
      "body": "Design discussion is needed for determining what we will need.\n"
    }
  ]
}
---
For post-0.3 batch processing we need to add support for jobs on the server. Its API should include:

* Scheduling jobs (starting a short, long or batch operation).
* Managing jobs (checking status, pausing, cancelling, getting all finished jobs).

RESTful URLs need to be used when implementing this.

        