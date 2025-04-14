---json
{
  "title": "FLOE-254",
  "summary": "Update the infusion library to use the build from the master branch",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-02-02T15:21:30.770-0500",
  "updated": "2015-11-03T10:55:17.013-0500",
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
      "date": "2015-02-05T11:08:29.385-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/5> ) into the project repo at 25415ae5dc12921e879c2f218031a1960a9fa33b\n"
    }
  ]
}
---
The first discovery tool is using the build from a development branch that upgrades the prefs framework with the core model relay functionality. At this round of the first discovery tool, this upgrade is not necessary. So will be more proper and maintainable to use the master branch directly.

        