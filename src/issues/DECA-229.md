---json
{
  "title": "DECA-229",
  "summary": "General cleanup and refactoring of server side code",
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
  "date": "2012-01-30T12:37:38.838-0500",
  "updated": "2012-05-18T14:21:19.798-0400",
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
      "date": "2012-01-30T16:01:40.651-0500",
      "body": "I've refactored the server code to remove old code and duplication.\n\nThe changes are currently in my bitbucket repo\\\n<https://jobara@bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:21:16.901-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Over the past several releases, there has been a lot of code changes. This has resulted in duplicate code, unneeded code, and etc. These should be cleaned up and refactored as needed.

        