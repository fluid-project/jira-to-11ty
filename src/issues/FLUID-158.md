---json
{
  "title": "FLUID-158",
  "summary": "LayoutHandlers should take the container as constructor parameter",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-01-10T17:34:10.000-0500",
  "updated": "2008-08-09T14:28:16.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
LayoutHandlers depend on a reference to the Reorderer's container to do their work. However, the container is not specified as a parameter to the constructor, it's set at an indeterminate time via a setter.

This should be refactored so that the container is passed in on construction of a new layout handler. As a result, this will require a refactoring of the Reorderer to take a real DOM element (or jQuery), rather than just the ID of the container.

        