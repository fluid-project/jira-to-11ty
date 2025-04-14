---json
{
  "title": "FLUID-726",
  "summary": "Using ENTER key to activate inline edit fails",
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
  "date": "2008-06-09T15:11:59.000-0400",
  "updated": "2008-06-23T17:34:59.000-0400",
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
      "date": "2008-06-09T16:05:34.000-0400",
      "body": "This was fixed by a work around from Colin that wraps the 'focus' in a setTimeout. It looks like the underlying problem is a bug in Firefox.\n"
    }
  ]
}
---
The ENTER key does not work properly to activate the inline edit field (the SPACE key does work). When ENTER is pressed, component does successfully enter 'edit' mode, but the ENTER event is (for some unknown reason) propagated to the input field, which triggers the end of the edit mode.

dev-iteration35

        