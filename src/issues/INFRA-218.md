---json
{
  "title": "INFRA-218",
  "summary": "Ensure old files are removed when deploying Infusion build site",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-09-14T10:33:53.203-0400",
  "updated": "2018-09-14T10:33:53.203-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
From an email from Justin Obara:

"Also an issue we’ve had in the past is that the build site retained moved/deleted files after a new deployment. I believe this is because the remote server that hosts the build site didn’t clear out the directory and just had the new files copied over top."

I believe this should still be an issue given how the Publish Over SSH plugin works, but need to investigate and figure out what the best fix is.

        