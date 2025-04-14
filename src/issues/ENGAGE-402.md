---json
{
  "title": "ENGAGE-402",
  "summary": "Prune unnecessary JavaScript and CSS dependencies from the application",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-17T18:08:52.000-0500",
  "updated": "2014-03-03T13:47:08.480-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-17T18:09:14.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    }
  ]
}
---
At the moment, we link to a number of dependencies that probably aren't needed in a mobile environment, including jquery UI and the keyboard-a11y plugin for Cabinet. The code should be refactored to check for the presence of the plugin before using it, and then these dependencies should be removed from the relevant pages.

        