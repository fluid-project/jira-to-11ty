---json
{
  "title": "FLUID-205",
  "summary": "When jQuery UI 1.5 is released, confirm FLUID-152 fixed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-02-05T13:50:02.000-0500",
  "updated": "2011-02-22T16:27:57.488-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T13:33:50.000-0400",
      "body": "The upgrade to jQuery 1.2.3 has eliminated this problem. The patch is no longer necessary.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.487-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently FLUID-152 is solved using a temporary fix for a jQuery bug (#1547). #1547 has been fixed in rev4063 and should be in the next major release of jQuery UI 1.5.

Task: Confirm that FLUID-152 is fixed using jQuery UI 1.5 without running our temporary fix and CLOSE this sub-task and FLUID-152 as necessary.

        