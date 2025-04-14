---json
{
  "title": "FLUID-5029",
  "summary": "\">\" separator in IoCSS target field should not be able to identify a non-direct child",
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
  "reporter": "Cindy Li",
  "date": "2013-06-03T14:30:37.470-0400",
  "updated": "2014-03-03T11:49:52.552-0500",
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
      "date": "2013-12-19T02:36:36.058-0500",
      "body": "Merged into trunk at revision 16b03e7\n"
    }
  ]
}
---
The ">" sign in the distributeOptions -> target field is to identify the direct descendant of a component. However, it also allows the pass-down onto a non-direct child.

The test case to demonstrate this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2726-2761>

        