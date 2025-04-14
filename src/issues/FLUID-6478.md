---json
{
  "title": "FLUID-6478",
  "summary": "fluid.freezeRecursive should bailout with framework diagnostic on exceeding recursion depth through circularity or other cause",
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
  "date": "2020-03-16T13:35:49.743-0400",
  "updated": "2024-07-18T07:45:38.265-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-03-16T20:25:28.167-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/979) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/a79da1b9c996e6546896d468e8f30ef7aa1325ea).\n"
    }
  ]
}
---
Many core framework utilities consuming JSON structures, such as fluid.copy and options merging in general, have a configurable maximum recursion depth, via the parameter fluid.strategyRecursionBailout, which is helpful in providing a readable framework diagnostic rather than memory exhaustion or some other bare JS failure. We should extend this behaviour to the commonly used utility fluid.freezeRecursive also.

        