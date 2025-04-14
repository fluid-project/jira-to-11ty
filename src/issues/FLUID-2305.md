---json
{
  "title": "FLUID-2305",
  "summary": "Decorator interference when rendered in adjacent branches",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-03-02T12:49:21.000-0500",
  "updated": "2009-03-03T10:33:17.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-03-02T13:33:26.000-0500",
      "body": "Test case does not demonstrate that there is a problem - issue is probably due to cross-linked options structures and mismatched ids.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-03T10:33:17.000-0500",
      "body": "Pushed ahead to refactor component using the Fluid Framework and the issue is no longer present. It appears that Antranig's comment points to the actual cause of the issue.\n"
    }
  ]
}
---
In progress, more details to follow (may not be a bug) - attribute lists seem to have become crosslinked when rendering decorators in repeated branches

        