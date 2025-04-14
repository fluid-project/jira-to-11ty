---json
{
  "title": "FLUID-6702",
  "summary": "Remove fluid.find_if from framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-12-07T09:02:59.364-0500",
  "updated": "2022-02-03T10:40:14.157-0500",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The signature of fluid.find\_if is almost (except for the provision of a direct default value) identical to that of Array.prototype.find which is supported in all of our current environments. We should remove fluid.find\_if from our framework and documentation.

        