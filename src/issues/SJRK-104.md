---json
{
  "title": "SJRK-104",
  "summary": "Use pushState to manage back/forward behaviour when creating a story",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T14:49:55.501-0400",
  "updated": "2020-03-15T21:07:20.410-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-326/",
      "key": "SJRK-326",
      "summary": "Edit Page state can persist after leaving page"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-101/",
      "key": "SJRK-101"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-03-02T15:57:53.652-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/56) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/94a55d18c52e605dc9c7292fd0bc75b6d8887b03).\n"
    }
  ]
}
---
Right now, there are 3 "pages" in the story creation flow, but they don't behave like pages in respecting the back / forward buttons of the browser.

We can use HTML5 pushState to make this happen.

        