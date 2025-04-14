---json
{
  "title": "DATA-1",
  "summary": "Improve forgiving join implementation to be able to join on a compound column",
  "tags": "DATA",
  "project": {
    "key": "DATA",
    "title": "Pluralistic Data Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Done",
  "resolution": "Done",
  "reporter": "Antranig Basman",
  "date": "2021-04-07T10:42:43.790-0400",
  "updated": "2024-07-18T16:00:47.612-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-18T16:00:47.438-0400",
      "body": "Migrated to <https://github.com/inclusive-design/forgiving-data/issues/9>&#x20;\n"
    }
  ]
}
---
Review comment <https://github.com/inclusive-design/forgiving-data/pull/1#discussion_r605298102> on the initial forgiving-data pull request noted that the implementation could be improved to join on a compound column rather than a single best choice. A related improvement would be to present the user with a ranked list of choices for a join rather than a single best choice.

        