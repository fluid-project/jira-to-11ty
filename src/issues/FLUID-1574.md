---json
{
  "title": "FLUID-1574",
  "summary": "Default role for Layout Reorderer/Layout Customizer is wrong",
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
  "reporter": "Anastasia Cheetham",
  "date": "2008-09-16T15:06:44.000-0400",
  "updated": "2008-09-30T11:10:15.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-17T19:56:25.000-0400",
      "body": "Fixed at revision 5559\n"
    }
  ]
}
---
The default containerRole for the Layout Customizer/Layout Reorderer should be Regions (based on the most common use-case for the component, and ARIA requirements), but it defaults to the generic Reorderer default of List.

The moduleLayoutHandler **tries** to default to regions by doing\
that.options.containerRole = that.options.containerRole || fluid.roles.REGIONS;\
(ModuleLayout.js, line 147) but by the time this line is executed, the containerRole has already been set to the List default, and so isn't set to Regions.

        