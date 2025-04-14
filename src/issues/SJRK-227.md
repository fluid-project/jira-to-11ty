---json
{
  "title": "SJRK-227",
  "summary": "Add handling for datasource onError event",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-02-15T15:15:58.950-0500",
  "updated": "2019-04-25T09:48:31.494-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-04-16T17:48:25.819-0400",
      "body": "An attempt was made to add integration tests for the listeners I added which call fluid.log, but there was no straightforward way to do so at this time. In newer versions of Infusion (as of October 2018), there is the fluid.loggingEvent which can be taken advantage of for setting up tests, but this depends on <https://fluidproject.atlassian.net/browse/SJRK-244#icft=SJRK-244> being completed.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-04-25T09:48:31.489-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/22) has been merged into the project repo stories-floe-dev branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/9448cb4f4372ca1f5afb79503ceb24b155d07e77).\n"
    }
  ]
}
---
The datasources defined in sjrk.storyTelling.server's server component do not currently have listeners attached to the onError event, and there are cases when it will fail silently. For instance, when the database server is not running and an attempt to call a datasource invoker on it is made.

Add some handling for these events, logging or otherwise.

        