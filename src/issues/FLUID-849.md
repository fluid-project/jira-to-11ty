---json
{
  "title": "FLUID-849",
  "summary": "InlineEdit should provide an option to select all the text when switching into edit mode.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2008-07-01T18:26:57.000-0400",
  "updated": "2011-02-22T16:27:44.155-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
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
      "author": "Colin Clark",
      "date": "2008-07-01T22:42:38.000-0400",
      "body": "I've committed a working version of this, but we still need a good unit test for it. I haven't yet been able to figure out how to query a text field element to determine which characters are selected.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:27:43.000-0400",
      "body": "Fixed in time for Infusion 0.4.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.154-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Currently, the inline edit doesn't select the editable text when the user switches to edit mode. This is consistent with the wireframe, but in some contexts it may be more appropriate to automatically highlight the text.

A mode should be added where this is done automatically.

        