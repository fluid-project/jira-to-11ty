---json
{
  "title": "FLUID-1138",
  "summary": "Document the Layout Customizer's ID requirements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-08-13T12:11:19.000-0400",
  "updated": "2009-06-03T13:43:47.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:28:57.000-0400",
      "body": "The ModuleLayout no longer makes assumptions on id structure beyond those required to specify it.\n"
    }
  ]
}
---
The Layout Customizer does require that all columns and portlets have unique IDs. This is, in general, contrary to our DOM-agnosticism goals, and is therefore unexpected. The basic API for the Layout Customizer does not imply this requirement.

The documentation should make this requirement explicit (unless the Reorderer gets refactored to eliminate the requirement).

dev-iteration43

        