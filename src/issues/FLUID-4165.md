---json
{
  "title": "FLUID-4165",
  "summary": "Renderer component may not properly support automatic creation of applier if none is supplied",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-03-30T01:01:48.362-0400",
  "updated": "2014-03-03T13:12:01.900-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
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
      "date": "2011-04-03T23:33:06.313-0400",
      "body": "Report was correct and issue is now resolved. Top-level options of \"model\" and \"applier\" will now be propagated to the relevant other points of component configuration, via the intermediate route of the modelComponent preInitFunction.\n"
    }
  ]
}
---
As part of the contract of "model-bearing grade" inherited via viewComponent, this is required - anecdotal report from JURA that this does not work.

        