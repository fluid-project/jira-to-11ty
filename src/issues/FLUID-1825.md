---json
{
  "title": "FLUID-1825",
  "summary": "Undo should not require model to be inside 'value'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-18T16:21:47.000-0500",
  "updated": "2009-03-17T17:22:20.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T11:25:39.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-17T15:24:04.000-0400",
      "body": "Fixed at revision 6764 - note new API, updateModelValue for InlineEdit\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-17T17:06:38.000-0400",
      "body": "I've reviewed and tested the changes for this, and they look good to me. Undo no longer has this requirement. I'll update the Undo documentation accordingly.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-17T17:22:20.000-0400",
      "body": "closed based on the above review and testing\n"
    }
  ]
}
---
The current implementation of Undo requires that a component model be inside an object called 'value' inside the model, i.e. "that.model.value" (see the click handlers bound to "undoControl" and "redoControl" in Undo.js, inside bindHandlers()).

This indirection should not be required - anything living at .model should be treated as the model.

        