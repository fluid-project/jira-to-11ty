---json
{
  "title": "FLOE-416",
  "summary": "Upgrade Infusion to the 2.x line from Infusion master",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-08-31T10:30:36.072-0400",
  "updated": "2015-11-03T12:56:34.400-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-331/",
      "key": "FLOE-331"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-09-15T09:28:03.946-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/99>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-09-24T10:23:30.951-0400",
      "body": "The pull request has been merged into the master branch @ 74f6407b4aac5d94593c0ffee9f5242fcb40f458\n"
    }
  ]
}
---
Infusion has undergone a large scale refactoring for its 2.x line. We should upgrade the First Discovery to use a version of Infusion from this line instead. This will be necessary for FLOE-331.

        