---json
{
  "title": "FLUID-3577",
  "summary": "Update Infusion to the latest version of QUnit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-03-31T17:28:03.000-0400",
  "updated": "2010-04-13T12:03:55.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-31T17:28:37.000-0400",
      "body": "While we're at it, let's create a tutorial that teaches users how to upgrade their own unit tests, too.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-13T12:03:55.000-0400",
      "body": "The upgrade to qunit was complete. There was some documentation written on the migration page <http://wiki.fluidproject.org/display/fluid/Upgrading+to+Infusion+1.2>\n"
    }
  ]
}
---
We're currently linking against a slightly older version of QUnit, jQuery's test framework. With our impending update to jQuery 1.4.2 and jQuery UI 1.8, let's also update to the newest QUnit.

        