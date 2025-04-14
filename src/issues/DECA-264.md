---json
{
  "title": "DECA-264",
  "summary": "Split off install-scripts into it's own repo",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-18T13:02:48.093-0400",
  "updated": "2012-05-18T14:09:40.390-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:09:40.389-0400",
      "body": "Split the install-scripts into a separate subrepo and linked it into the default repo. Merged into the project repo at aab285effe9dba06a160e6ea7db235cb41d205bd\n"
    }
  ]
}
---
With the install-scripts in its own repository it will be easier to make changes to it independent of the rest of the code, and to repackage if we have a separate distribution method in the future.

        