---json
{
  "title": "FLUID-5739",
  "summary": "Decrement the Infusion version number in the 1.9.x branch",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2015-08-12T10:44:26.069-0400",
  "updated": "2024-07-22T09:31:32.219-0400",
  "versions": [
    "1.9"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5741/",
      "key": "FLUID-5741"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:56:18.466-0400",
      "body": "Merged into 1.9.x branch at revision 0c39a5f3cc61b2a465e2194311f6d40d3f9a46d6\n"
    }
  ]
}
---
Currently, the 1.9.x branch reports itself to npm as version 2.0.0-SNAPSHOT, and the namespace declared in JavaScript is fluid\_2\_0. We should decrement the versions in this branch to 1.9.0-SNAPSHOT and fluid\_1\_9.

        