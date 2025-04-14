---json
{
  "title": "FLUID-6577",
  "summary": "Add support for promise-returning functions to jqUnit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2020-11-12T12:31:18.157-0500",
  "updated": "2020-11-12T16:46:18.510-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-11-12T16:46:18.508-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1035> ) into the project repo at 1619f14b960ccf2727db0db45570811186a26aeb\n"
    }
  ]
}
---
With the modern standard of a "function returning promise" blessed by the async/await ES6 language structure, we should ease writing test fixtures in this style by adding a new wrapper to jqUnit e.g. jqUnit.promiseTest(function () .....

        