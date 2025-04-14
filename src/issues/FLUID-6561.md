---json
{
  "title": "FLUID-6561",
  "summary": "Update references pointing at the \"master\" branch to now point at \"main\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2020-10-22T16:05:47.091-0400",
  "updated": "2024-07-22T10:35:15.842-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6562/",
      "key": "FLUID-6562"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Now that we've updated the default branch name to "main" from "master" we need to update CI and other references to point at "main" instead.

        