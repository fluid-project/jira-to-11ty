---json
{
  "title": "SJRK-292",
  "summary": "Story browse page lists two colons for \"keywords\" line",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-09-13T12:43:50.414-0400",
  "updated": "2019-11-15T16:20:09.985-0500",
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
      "date": "2019-11-15T16:19:21.257-0500",
      "body": "The pull request - <https://github.com/fluid-project/sjrk-story-telling/pull/51> has been merged into the project repo \"stories-floe-dev\" branch at this commit - <https://github.com/fluid-project/sjrk-story-telling/commit/ceba0103e38470c49c550c7b02affc563edd1175>.\n"
    }
  ]
}
---
The list of stories on the Browse page has two colons after the "Keywords" line for each story item. See screenshot for details.

Actual: "Keywords::"

Should be: "Keywords:"

        