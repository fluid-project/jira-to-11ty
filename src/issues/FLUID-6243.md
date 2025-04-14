---json
{
  "title": "FLUID-6243",
  "summary": "Update 'fluid.flattenObjectPaths' to support different pathing schemes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-01-30T08:08:38.032-0500",
  "updated": "2024-07-22T08:59:44.495-0400",
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
The unsupported function \`fluid.flattenObjectPaths\` created in FLUID-6223 only supports "dot notation" EL Paths, and not any of the other mechanisms we provide in other contexts, such as resolving using an array of path segments.

        