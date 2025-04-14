---json
{
  "title": "FLOE-428",
  "summary": "Demo-specific config should be in demo code, not in main code",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2015-10-21T12:06:53.812-0400",
  "updated": "2015-11-03T13:02:30.328-0500",
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
      "author": "Cindy Li",
      "date": "2015-10-21T12:45:45.159-0400",
      "body": "Merged the pull request (<https://github.com/GPII/first-discovery/pull/104>) into the master @ 2519825aed3afba7532d9429ae3d7ff80a217724\n"
    }
  ]
}
---
The prefsServerIntegration aux schema includes a 'terms' section to override the default paths, but this is only necessary because we're using it in a demo that's in a different relative location. I think that the code that's in a different relative location should be the one that's responsible for overriding the defaults. It's a small change, but I think it would clarify who's responsible for what, as well as illustrate appropriate techniques for overriding parts of an auxilliary schema.

        