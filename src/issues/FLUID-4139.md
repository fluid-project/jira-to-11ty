---json
{
  "title": "FLUID-4139",
  "summary": "Unit tests should make use of the jqUnit abastractions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2011-03-10T12:58:08.365-0500",
  "updated": "2015-06-26T10:17:59.989-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T13:11:36.549-0400",
      "body": "Can no longer see any direct references to qunit's ok method.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:30.626-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The keyboard-a11y-tests.js makes a direct call to the qunit "ok" function.

        