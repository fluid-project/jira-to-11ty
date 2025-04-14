---json
{
  "title": "FLUID-6779",
  "summary": "DOM binder's method names take priority over selector names in EL resolution",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2024-04-23T11:42:36.816-0400",
  "updated": "2024-04-23T11:42:37.231-0400",
  "versions": [
    "4.6"
  ],
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
The DOM binder’s EL resolution (implemented through the weird “resolvePathSegment()” hack) has the priorities the wrong way round - for example, a selector named “clear” has its results hidden by the DOM binder method named “clear” when resolved via an expression like `{that}.dom.clear`

There must be a further bug since the implementation of fluid.model.resolvePathSegment in Fluid.js line 1126 does appear to give priority to the return value of resolvePathSegment.

        