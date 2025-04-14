---json
{
  "title": "FLUID-3043",
  "summary": "Collect all redundant regular expressions into single place ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Jacob Farber",
  "date": "2009-07-16T10:08:12.000-0400",
  "updated": "2009-08-24T11:20:21.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-07-16T14:30:44.000-0400",
      "body": "All redundant regex strings were collected into constants.\n"
    }
  ]
}
---
There are a few regular expressions used throughout the php code which are basically the same thing. They could be refactored into single functions to avoid fixing the same code in multiple places.

        