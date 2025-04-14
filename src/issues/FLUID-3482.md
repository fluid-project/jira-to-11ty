---json
{
  "title": "FLUID-3482",
  "summary": "Renderer needs to apply proper JSON encoding to the arguments renderer in init blocks",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-01-20T13:17:42.000-0500",
  "updated": "2010-01-20T13:38:53.000-0500",
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
      "date": "2010-01-20T13:38:53.000-0500",
      "body": "Fixed at revision 9059 with test case. This fix is needed urgently for Fluid Engage work this week.\n"
    }
  ]
}
---
Inherited from the cantankerous RSF infrastructure, the renderer currently encodes each argument to an InitBlock as a String. As well as taking accounts of literal types, this also needs to apply JSON.stringify to arguments of composite types.

        