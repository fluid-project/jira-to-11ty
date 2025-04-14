---json
{
  "title": "SJRK-447",
  "summary": "replace fluid-grunt-lint-all with fluid-lint-all",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-01-13T10:33:51.572-0500",
  "updated": "2021-01-25T15:04:24.205-0500",
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
      "author": "Justin Obara",
      "date": "2021-01-25T15:04:24.163-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/107> ) into the project repo at a95888751026ef45169dff8357b6e37bb9f289ca\n"
    }
  ]
}
---
[fluid-lint-all](https://www.npmjs.com/package/fluid-lint-all) provides similar functionality for listing as [fluid-grunt-lint-all](https://www.npmjs.com/package/fluid-grunt-lint-all) but without the need for grunt to run the tasks. Storytelling only uses grunt for linting, so it seems to make sense to switch fluid-lint-all and remove the grunt and grunt related dependencies.

        