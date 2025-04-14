---json
{
  "title": "FLUID-4193",
  "summary": "Deferred decorators only apply to one of a set of multiple matches for a renderer component in markup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2011-04-27T15:11:47.512-0400",
  "updated": "2014-03-03T13:10:53.772-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The "deferred renderer decorators" (including jQuery, fluid, and event) do not properly handle the case where a renderer component (that is, its selector and id) match more than one block of markup in the template. Only one of the markup blocks is matched by the decorator, and in fact is targetted multiple times.

        