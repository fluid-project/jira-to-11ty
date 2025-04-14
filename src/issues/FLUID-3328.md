---json
{
  "title": "FLUID-3328",
  "summary": "Renderer ignores debugMode option",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-23T16:47:23.000-0400",
  "updated": "2010-01-29T09:03:33.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
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
      "date": "2009-11-29T00:36:50.000-0500",
      "body": "Fixed at revision 8765\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-01-29T09:03:33.000-0500",
      "body": "Confirmed.\n"
    }
  ]
}
---
Currently, fluid.renderer() sets the debugMode flag to the value passed in the options, but then 14 lines later hard-codes it to 'false'

        