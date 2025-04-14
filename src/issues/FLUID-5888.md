---json
{
  "title": "FLUID-5888",
  "summary": "Irregularity in behaviour of fluid.constructSingle for empty paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2016-04-12T21:23:47.195-0400",
  "updated": "2024-07-22T09:26:47.746-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The utility fluid.constructSingle has not been properly documented (it falls between the stools of the IoC API and the ContextAwareness API) and its behaviour with respect to the first "path" argument is irregular. If this path contains no path segments (\[]), the behaviour will be to automatically append fluid.resolveRoot to the grade names of the component which is to be constructed. This utility also automatically calls fluid.typeNameToMemberName to derive a member name. We need to remove these irregularities and properly document the utility.

        