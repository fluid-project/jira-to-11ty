---json
{
  "title": "FLUID-5518",
  "summary": "Break out logic in fluid.fail into similar stacking namespaced listeners as in Fluid-node's uncaught exception handler",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-09-30T17:49:48.517-0400",
  "updated": "2017-02-27T15:49:19.547-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5582/",
      "key": "FLUID-5582",
      "summary": "Improve flexibility of fluid.fail handling further"
    }
  ],
  "attachments": [],
  "comments": []
}
---
With the partial implementation of <https://fluidproject.atlassian.net/browse/FLUID-5506#icft=FLUID-5506>, we were able to implement our uncaught exception handler within the node environment as a series of separately overrideable, separately schedulable handlers. We should do the same for fluid.fail in order to facilitate the testing of error functionality in complex applications. We currently have a duplicated code block in Kettle's "ErrorTests.js" from this cause

        