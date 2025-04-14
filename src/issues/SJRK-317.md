---json
{
  "title": "SJRK-317",
  "summary": "100-story limit on Browse page",
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
  "date": "2019-12-11T15:34:48.954-0500",
  "updated": "2020-04-21T13:00:59.597-0400",
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
      "date": "2020-04-16T12:41:26.671-0400",
      "body": "Quick fix: we can set it to a big number like 500 in the short term\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-04-17T09:37:37.123-0400",
      "body": "[The temporary solution](https://github.com/fluid-project/sjrk-story-telling/pull/70) that increases the number of stories per page to 500 has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/d48db8597c47b9371ec414b88bac11570046cd5d).\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-04-21T11:46:44.545-0400",
      "body": "<https://fluidproject.atlassian.net/browse/SJRK-339#icft=SJRK-339> has been filed to add pagination\n"
    }
  ]
}
---
The Browse page is currently limited to loading a maximum of 100 stories. This is defined at [this line](https://github.com/fluid-project/sjrk-story-telling/blob/stories-floe-dev/src/server/dataSource.js#L42) in the code:

```javascript
limit: "100",
```

This is a reasonable number for a single page (perhaps even too high), but without pagination it means that we have at the same time far too many stories for one page and also the inability to see anything after the 100th entry, regardless of what's in the database.

To solve this, I propose either implement pagination or removing the limit altogether and deferring a pagination system to another Jira (in that case, please file said issue).

        