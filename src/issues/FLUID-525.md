---json
{
  "title": "FLUID-525",
  "summary": "Improve the ModuleLayoutHandler documentation on the wiki.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-04-23T14:41:36.000-0400",
  "updated": "2008-06-23T17:54:15.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-02T12:25:38.000-0400",
      "body": "These changes have been made to the documentation\n"
    }
  ]
}
---
Wiki page: <http://wiki.fluidproject.org/display/fluid/ModuleLayoutHandler>

The targetPerms section is not clear as to which module is associated with which permissions row.

We should probably also be really clear about the fact that the module layout handler does not use the DOM but instead looks only at the objects from the server.

We should also document the client server communication in the module layout handler.

dev-iteration33\
dev-iteration34

        