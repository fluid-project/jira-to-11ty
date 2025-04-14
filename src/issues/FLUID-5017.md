---json
{
  "title": "FLUID-5017",
  "summary": "IoCSS: Merge \"distributeOptions\" blocks defined in the own component and grade components",
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
  "reporter": "Cindy Li",
  "date": "2013-05-13T09:48:00.694-0400",
  "updated": "2024-07-22T09:35:18.111-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-24T23:12:16.465-0400",
      "body": "Merged into trunk at revision e4ebd9\n"
    }
  ]
}
---
If the "distributeOptions" block was defined in both the own component and its grade component(s), only the one for the own component would be distributed correctly.

The test case to demonstrate this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2596-2641>

        