---json
{
  "title": "FLUID-5753",
  "summary": "Allow IoC testing framework's testEnvironment to act as its own testCaseHolder",
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
  "date": "2015-08-26T20:51:41.416-0400",
  "updated": "2024-07-22T10:35:00.134-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
It's inconvenient when setting up small test fixtures to have to create separate components to hold the environment and its fixtures. There were also problems created by IoC visibility rules. This problem is referred to in Kettle's KettleTestUtils.js, which defines a serverEnvironment which is empty - all reusable material has to be defined in the TestCaseHolder otherwise it can't be configured from the fixtures. In the current framework we can use modern distributeOptions to reach these.

        