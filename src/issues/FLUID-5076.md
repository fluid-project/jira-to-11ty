---json
{
  "title": "FLUID-5076",
  "summary": "Synchronize UIO namespaces",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-06-28T16:02:57.466-0400",
  "updated": "2013-07-04T09:01:19.641-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-07-04T09:01:09.734-0400",
      "body": "Pull requests are merged into master @ 89719d9d893151178aeff2bd0ad42ca0f92c6878 & 77fa9e025196a22aa81286c92f71f9a82f903992\n"
    }
  ]
}
---
With the conflict between the preference key and panel component for schema work (<http://issues.fluidproject.org/browse/FLUID-4907>), the UIO name spaces are decided to be synchronized as:

fluid.uiOptions is the top level namespace;

For grades/components:\
fluid.uiOptions.enactors.textSize\
fluid.uiOptions.panels.textSize\
fluid.uiOptions.schema.textSize

Preference key:\
fluid.uiOptions.textSize

        