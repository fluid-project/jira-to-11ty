---json
{
  "title": "FLUID-2185",
  "summary": "Update jqUnit to run off of latest version of QUnit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-02-03T08:56:01.000-0500",
  "updated": "2009-02-04T08:25:12.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-03T17:47:11.000-0500",
      "body": "revision r6409\\\nUpdated the forked version of qunit to the latest version from jQuery. Removed jqunit namespace from qunit functions in all unit tests.\n"
    }
  ]
}
---
Update jqUnit to run off of latest version of QUnit

Currently jqUnit runs off of a forked version of qunit.

        