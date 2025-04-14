---json
{
  "title": "FLUID-3770",
  "summary": "fluid.iota duplicated",
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
  "date": "2010-10-01T16:15:53.745-0400",
  "updated": "2013-08-16T10:51:53.479-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:18:25.464-0400",
      "body": "Merged into trunk at revision acf4633. fluid.iota now hoisted into core framework since it is used from more than 1 site.\n"
    }
  ]
}
---
The function fluid.iota(), initially confined to the Pager, has now been duplicated in RendererUtilities.js

It doesn't seem to be used anywhere outside the Pager, at least not that I can find. We should decide which one to keep, and get rid of the other one.

        