---json
{
  "title": "FLOE-249",
  "summary": "Create a new prefs editor type for the first discovery tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-01-26T16:14:37.469-0500",
  "updated": "2015-11-03T10:53:36.960-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-01-30T10:50:03.525-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/2> ) into the project repo at 4b937ae3a40386037c304170309607517ccb1a28\n"
    }
  ]
}
---
As the first pass, the new prefs editor type needs to:

1\. create the initial aux schema;\
2\. load in and show the main template for the first discovery tool;\
3\. unit tests.

        