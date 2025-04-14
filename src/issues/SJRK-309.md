---json
{
  "title": "SJRK-309",
  "summary": "Consider increasing maximum number of files in story",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-10-11T17:57:39.677-0400",
  "updated": "2020-04-21T13:00:59.806-0400",
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
      "author": "Cindy Li",
      "date": "2020-04-17T09:38:39.060-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/70) that increases the maximum number of files in a story to 50 has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/d48db8597c47b9371ec414b88bac11570046cd5d).\n"
    }
  ]
}
---
The current maximum number of files (read: images, audio or video files) that can be uploaded with a story is 10, even if all files have the same single source file on the client's machine. Consider increasing this to a larger number like 30 or 50.

The relevant line in source can be found here:\
<https://github.com/fluid-project/sjrk-story-telling/blob/a870c8afe9609a484f9005778039a0fe73974545/src/server/middleware/saveStoryWithBinaries.js#L22>

        