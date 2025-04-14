---json
{
  "title": "FLUID-1867",
  "summary": "Layout Reorderer doesn't actually define default selectors",
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
  "date": "2008-11-27T16:48:06.000-0500",
  "updated": "2009-06-03T13:45:30.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
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
      "date": "2008-11-27T17:06:01.000-0500",
      "body": "Unit test added, and bug fixed.\n"
    }
  ]
}
---
The Layout Reorderer supports selectors for columns and modules, and is supposed to have defaults for these (".columns" and ".modules" respectively, according to the documentation) but nowhere in the code are these defaults actually defined, and if you attempt to use them, it naturally doesn't work!

I'll note that none of the unit tests for the Layout Reorderer actually attempt to use the defaults, so this omission was never caught.

        