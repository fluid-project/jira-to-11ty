---json
{
  "title": "FLUID-766",
  "summary": "Moving focus away from an editor in edit mode doesn't switch that editor to display mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-11T13:31:56.000-0400",
  "updated": "2008-06-23T17:32:50.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-17T15:53:48.000-0400",
      "body": "Added a cancel handler that's bound to blur on edit fields.&#x20;\n"
    }
  ]
}
---
To reproduce:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

* Click on one of the fields - it will enter edit mode
* Click on any other field: it will enter edit mode, but the original one will stay in edit mode

This is reproduceable using tabs on FF2 and IE7, but not quite on FF3.

dev-iteration37

        