---json
{
  "title": "SJRK-421",
  "summary": "Update codecov configuration",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-11-11T16:14:06.244-0500",
  "updated": "2020-11-23T15:07:51.300-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
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
      "date": "2020-11-23T15:07:51.259-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/101) for fixing this issue has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/b1e65fb3960e04fec8bfe49707553d8fc127da14).\n"
    }
  ]
}
---
Update the codecov configuration to not check the patch coverage, and rely only on the project level coverage. We should also revisit the threshold for indicating a failure and if we want to display the comment or just the status check.

see: <https://docs.codecov.io/docs/commit-status>

        