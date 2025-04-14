---json
{
  "title": "FLUID-5014",
  "summary": "IoCSS has problem with passing one source value onto several targets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-05-08T14:52:18.849-0400",
  "updated": "2014-03-03T11:55:33.207-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-24T23:11:50.113-0400",
      "body": "Merged into trunk at revision e4ebd9\n"
    }
  ]
}
---
Case 1: When one source value is defined to be passed down to more than one sub-components, only the first sub-component receives the value.

The test case for this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2507-2548>

Case 2: When one source value is defined to be passed down to both its own sub-component and a sub-component of its grade component, only the sub-component of its own receives the value.

The test case for this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2550-2594>

        