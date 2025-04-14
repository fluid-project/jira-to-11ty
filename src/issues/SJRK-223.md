---json
{
  "title": "SJRK-223",
  "summary": "Merge the Server project into the UI project",
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
  "date": "2019-02-13T21:23:27.349-0500",
  "updated": "2019-03-12T11:45:08.433-0400",
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
      "url": "/browse/SJRK-224/",
      "key": "SJRK-224"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2019-03-12T11:45:08.420-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/18) has been merged into the project repo at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/9864a6a8766094ee331c1dcb7921d2869f46d25f).\n"
    }
  ]
}
---
Combine the two codebases by merging the server code into the UI code's repo. This will be a complicated job and may require sub-Jiras.

* Ensure tests are adjusted as necessary and that all are passing once the work is complete
* Explore, possibly time-boxed, the possibility of refactoring or updating the theming engine, or potentially even removing it altogether
* Parameterize and create high-level options for things that are currently handled by options distribution for improved legibility

        