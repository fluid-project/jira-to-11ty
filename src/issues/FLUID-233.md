---json
{
  "title": "FLUID-233",
  "summary": "Fix bug preventing users from Shift-Tabbing out of the container.",
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
  "date": "2008-02-14T09:18:47.000-0500",
  "updated": "2011-02-22T16:27:52.339-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
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
      "date": "2008-02-24T12:57:53.000-0500",
      "body": "Added an extra context flag for when focus is in the process of leaving the container. This is only set on Shift Tab keydown, and now allows users to successfully shift-tab out of the container by temporarily bypassing auto-select on focus.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.337-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        