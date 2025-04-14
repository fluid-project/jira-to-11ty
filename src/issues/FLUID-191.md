---json
{
  "title": "FLUID-191",
  "summary": "Define public methods within prototypes to allow familiar JavaScript inheritance patterns",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-01-28T11:36:14.000-0500",
  "updated": "2008-07-16T21:29:30.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-07-15T20:18:16.000-0400",
      "body": "We will actually move to the 'thatism' style instead.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-16T21:29:30.000-0400",
      "body": "As Michelle's comment notes, we're moving away from the use of prototypes, so this bug is no longer relevant.\n"
    }
  ]
}
---
Currently the Layout Handlers attach all of their functionality directly on a new instance using the "this" pointer. We should be attaching these public methods onto the LayoutHandler's prototype, allowing for more efficient sharing of code.

        