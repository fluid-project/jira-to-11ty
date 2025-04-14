---json
{
  "title": "SJRK-291",
  "summary": "Show the block Heading field first in block editors",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-09-12T19:50:37.246-0400",
  "updated": "2020-01-21T11:36:51.250-0500",
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
      "date": "2019-12-16T12:28:57.452-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/52) has been merged into the project repo stories-floe-dev branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/d2f09c5dc2f0cecc509402356920bb42df61e0e4).\n"
    }
  ]
}
---
After much feedback in the tool, it is probably best to have each block's Heading input field at the top of the block editor rather than after the "main" content input.

E.g. for a Text block, the current order is the Text field and then the Heading, but when this (or any) block is displayed, the Heading will be shown first. This is confusing and non-intuitive.

        