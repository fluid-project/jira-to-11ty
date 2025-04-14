---json
{
  "title": "FLUID-47",
  "summary": "Reorderer should programmatically add CSS classes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2007-10-05T11:17:05.000-0400",
  "updated": "2007-11-27T14:19:28.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
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
Currently, the CSS classes used to indicate the state of an orderable and to affect its appearance (default, selected and dragging) are present in the HTML template.

The Reorderer should programmatically add the default class to the orderables as part of the initialization process - otherwise, the template creator is required to do this in addition to adding the "orderable" class.

        