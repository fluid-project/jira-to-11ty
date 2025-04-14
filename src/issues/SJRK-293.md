---json
{
  "title": "SJRK-293",
  "summary": "Update Production Floe stories site with latest Dev",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-09-16T15:42:27.489-0400",
  "updated": "2019-10-03T13:44:37.859-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-09-17T15:41:41.920-0400",
      "body": "\\[The pull request]\\(<https://github.com/fluid-project/sjrk-story-telling/pull/43>) has been merged into the \"stories-floe-production\" branch at \\[this commit]\\(<https://github.com/fluid-project/sjrk-story-telling/commit/69270ca4ea724749b732d0f5775dce2c8b46402b>).\n"
    }
  ]
}
---
Update the Production stories site ([https://stories.floeproject.org](https://stories.floeproject.org/)) with the latest code from the development branch.

This will require adding a server configuration file to the host container in order to comply with the changes made in SJRK-237.

        