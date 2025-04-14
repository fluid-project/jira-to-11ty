---json
{
  "title": "FLUID-4885",
  "summary": "fixChildren utility in fluidRenderer does not work correctly in all environments (e.g. Node.js)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2013-01-11T12:21:21.051-0500",
  "updated": "2014-03-03T12:28:56.832-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
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
      "date": "2013-01-25T16:52:39.393-0500",
      "body": "Commited at revision 4e6eb77 - thanks for the fix and test case, Yura\n"
    }
  ]
}
---
!(children instanceof Array) seem to evaluate incorrectly in Node.js which results in corruption of the children array when expanding the renderer tree.

        