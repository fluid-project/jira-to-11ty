---json
{
  "title": "SJRK-450",
  "summary": "Update dependencies for storytelling tool to address issues with URL DataSource from Infusion",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-02-04T15:25:59.069-0500",
  "updated": "2021-02-08T12:12:56.286-0500",
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
      "date": "2021-02-08T12:12:56.280-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/110) that fixes this issue has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/d06cbb3285c4144214f9dbdaac75d6f869de45ca).\n"
    }
  ]
}
---
In particular we need to update to the latest dev release in the <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> line ( 3.0.0-dev.20210204T181946Z.3ed160b36.<https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> ) to get the fix for <https://fluidproject.atlassian.net/browse/FLUID-6593#icft=FLUID-6593> that we'll need to for testing SJRK-403 and SJRK-402. At the same time we should explore updating the other dependencies that are out of date. 

        