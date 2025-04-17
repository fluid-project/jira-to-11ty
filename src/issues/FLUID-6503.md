---json
{
  "title": "FLUID-6503",
  "summary": "Two modelised resources end up with duplicate content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-05-22T04:46:16.103-0400",
  "updated": "2024-07-18T07:42:01.878-0400",
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
This issue only affects the in-progress update of Infusion in the FLUID-6148 branch.

Reported by Tony Atkins \[RtF] in <https://github.com/GPII/gpii-handlebars/pull/31/files> - when two new-style modelised resources initialise two side-by-side model areas, they both end up with the contents of one resource.

This looks like a blunder in the new fluid.condenseResourceMap function in DataBinding.js

        