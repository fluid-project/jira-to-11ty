---json
{
  "title": "FLUID-5069",
  "summary": "Remove legacy layout preference and IE6ColorInversion enactor from UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-06-26T10:51:30.764-0400",
  "updated": "2024-07-22T09:34:27.582-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-07-02T14:45:15.849-0400",
      "body": "The pull request is merged into master @ dbb3e4fbc56cb2645ef7d33ddce15afcb71b59be\n"
    }
  ]
}
---
The layout preference that is currently still in the initial model and layout control panel was the legacy of "simplify content". It needs to be removed.

IE6ColorInversion enactor can be removed since IE6 is no longer supported.

        