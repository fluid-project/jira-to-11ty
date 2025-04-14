---json
{
  "title": "DECA-223",
  "summary": "rename books to library",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-01-18T12:25:11.907-0500",
  "updated": "2012-05-18T14:18:49.284-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-18T14:32:32.241-0500",
      "body": "I've pushed the changes up to my bitbucket repos\n\n<https://bitbucket.org/jobara/decapod-server-rest>\\\n<https://bitbucket.org/jobara/decapod-ui-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:18:45.955-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
It's a bit confusing at the moment to try to distinguish between books and book. The "books" resource and related code should be renamed to library to make it more clear.

        