---json
{
  "title": "SJRK-428",
  "summary": "Deployment step fails when there is a forced push",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-11-16T16:02:28.881-0500",
  "updated": "2020-11-16T16:46:40.133-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Because the deployment step works with a pre-cloned repository directory and then runs \`git pull\`, when there is a forced push, \`git pull\` fails to checkout the correct commit.

The deployment step needs to be changed to clone the repository from scratch every time (or to use a different git method to retrieve changes).

        