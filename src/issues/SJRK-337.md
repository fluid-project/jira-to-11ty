---json
{
  "title": "SJRK-337",
  "summary": "Create new version of the tool for AIHEC",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-04-14T12:55:34.036-0400",
  "updated": "2020-04-21T13:00:59.985-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-04-14T14:01:24.400-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/66) for creating the new AIHEC theme has been merged into the project repo at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/93b660623ce94c7cc5820f8ea7182d15cfa1705c).\n\n[The new AIHEC branch](https://github.com/fluid-project/sjrk-story-telling/tree/stories-aihec-production) comes into play.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-04-14T14:15:54.416-0400",
      "body": "There are still a few PR's to be created and merged in\n"
    }
  ]
}
---
Create a new theme and site for AIHEC

This includes:

* Repurposing the Cities theme
* Adding to the server environment as necessary
* Adding CI jobs to deploy and back up this new version
* Make sure it has SSL/TLS

        