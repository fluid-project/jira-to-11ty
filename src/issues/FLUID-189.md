---json
{
  "title": "FLUID-189",
  "summary": "Ensure locked portlets can be selected but can't be moved.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Colin Clark",
  "date": "2008-01-28T11:31:32.000-0500",
  "updated": "2008-02-12T14:42:26.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2008-02-02T23:17:17.000-0500",
      "body": "Although using the keyboard to navigate among all of the portlets, but not allow fixed ones to move nor be replaced by another is fixed, the movement behaviour of portlets at the ends of columns may not be correct.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-02-12T11:04:01.000-0500",
      "body": "Styling should not change when a non-movable portlet is selected and 'ctrl' is pressed.&#x20;\n"
    }
  ]
}
---
Locked portlets should be navigable via the keyboard, but shouldn't be movable.

        