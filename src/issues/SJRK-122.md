---json
{
  "title": "SJRK-122",
  "summary": "Implement combined tests battery using testem",
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
  "date": "2018-06-01T13:45:41.506-0400",
  "updated": "2020-08-04T12:30:55.915-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-303/",
      "key": "SJRK-303",
      "summary": "Add tests for each available theme"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-300/",
      "key": "SJRK-300"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-07-17T12:09:10.950-0400",
      "body": "@@Alan Harnum can you please remind me what the use of this will be?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-09-25T16:25:47.567-0400",
      "body": "Updated after review feedback for <https://fluidproject.atlassian.net/browse/SJRK-268#icft=SJRK-268>: <https://github.com/fluid-project/sjrk-story-telling/pull/39#discussion_r328089356>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-08-04T12:30:55.909-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/92) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/f3ad5428bc4594aa4d9e0b103cd220d46065f986).\n"
    }
  ]
}
---
Implement the server, integration, and browser tests such that they can be run independently, but also run all together using [testem](https://github.com/testem/testem). Also ensure server tests can be run alongside the running webserver; this may require using a different port to run the tests.

        