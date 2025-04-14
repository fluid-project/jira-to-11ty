---json
{
  "title": "FLUID-568",
  "summary": "ARIA dropeffect being set incorrectly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-05-07T09:16:53.000-0400",
  "updated": "2008-06-05T15:50:45.000-0400",
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
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-07T09:52:18.000-0400",
      "body": "This has been changed to set and reset on start and stop of dragging (mouse or keyboard based).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-04T09:29:29.000-0400",
      "body": "I was wrong, we **do** do this properly\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-05T15:50:45.000-0400",
      "body": "dev-iteration35\n"
    }
  ]
}
---
Currently, the ARIA dropeffect property is being set to 'move' for all drop targets on setup. This is incorrect: the dropeffect should only be set to 'move' once a drag has been initiated. Otherwise, it should be 'none'.

        