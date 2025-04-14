---json
{
  "title": "FLOE-131",
  "summary": "Improve video metadata panel to not re-render itself at every modelChange",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-12-17T12:11:24.679-0500",
  "updated": "2014-01-06T10:43:16.366-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-01-06T10:43:16.280-0500",
      "body": "Merged into master @ 20654358f2fb6b113b1a6a77daee31dd86e2f004\n"
    }
  ]
}
---
Right now, the video panel is responding to the change request and reflect it on UI, which is not going to happen in our demo. Needs to remove it and modify unit tests accordingly.

        