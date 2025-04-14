---json
{
  "title": "FLUID-2979",
  "summary": "fluid.fetchResources requires a node ID (instead of a selector)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2009-07-03T09:59:53.000-0400",
  "updated": "2014-11-05T14:25:36.511-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-11-05T14:25:36.511-0500",
      "body": "@@Anastasia Cheetham and @@Antranig Basman is this still an issue?\n"
    }
  ]
}
---
The ResourceSpec object passed to the Renderer call fluid.fetchResources() includes a "nodeID" which is "the id of a node within the current document holding a template, for which innerHTML is to be treated as a template." We should probably not be requiring that mark-up have IDs - we should instead accept a selector. For backward compatibility, we will probably have to leave the nodeID and add a field for a selector that could be used instead.

        