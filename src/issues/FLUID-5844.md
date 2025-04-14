---json
{
  "title": "FLUID-5844",
  "summary": "Generalise fluid.accumulate to iterate over hashes as well as arrays",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-01-20T20:22:37.415-0500",
  "updated": "2016-01-20T20:22:37.415-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
There's no particular reason for this limitation - users of fluid.accumulate are quite rare anyway and it seems sensible to position it for flexibility rather than performance

        