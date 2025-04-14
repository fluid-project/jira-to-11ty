---json
{
  "title": "DECA-112",
  "summary": "Update the Decapod default subrepositories to point to a Decapod-specific, history-free version of the Infusion 1.2 tag.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-06-02T17:37:13.658-0400",
  "updated": "2010-06-08T15:04:52.363-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-06-08T15:04:42.306-0400",
      "body": "I resolved this issue in decapod-ui master at r410826ea9ed4 by linking to a new decapod-infusion repository containing only the Infusion 1.2 tag without excess history.\n"
    }
  ]
}
---
At the moment, we link against a repository that contains the full revision history for Infusion, which is about a 280 Mb download. To simplify things, we should link to a history-free, Decapod-specific repository that contains the latest stable tag which the application depends on.

        