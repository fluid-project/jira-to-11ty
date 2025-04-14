---json
{
  "title": "FLUID-4350",
  "summary": "ids allocated by the framework via allocateSimpleId may collide across multiple fluid instances (different versions, or copies inside iframes)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-07-21T15:55:18.122-0400",
  "updated": "2014-04-02T15:35:19.965-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3783/",
      "key": "FLUID-3783"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-08-11T01:27:56.371-0400",
      "body": "This has been committed to the framework for 1.4\n"
    }
  ]
}
---
In developing FatPanelUIOptions, cindyli today discovered a collision between ids allocated inside an iframe and those on the outside, that caused the component to fail. This has been a more general problem with fluid ids for a while, which we have put off for lack of a really good solution. Research suggests there is no better approach in JavaScript but to use some form of id prefix generated from a random number. This should help with collisions with ids held in markup as well.

        