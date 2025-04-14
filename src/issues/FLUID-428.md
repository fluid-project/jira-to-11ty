---json
{
  "title": "FLUID-428",
  "summary": "Remove onclick handlers from markup and bind them unobtrusively in code.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-04-03T16:11:03.000-0400",
  "updated": "2011-01-19T08:25:35.495-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Workshops, Presentations, Reports"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-19T08:23:50.921-0500",
      "body": "Reopening these issues in order to add the workshopcomponent to them\n"
    }
  ]
}
---
There are onclick handlers in the markup for the Add All, Remove All, and Save Collection buttons. These should be bound using jQuery within the List Builder code.

        