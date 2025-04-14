---json
{
  "title": "FLUID-4623",
  "summary": "Enable console and fluid.logging in infusion node module.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2012-02-28T13:05:55.829-0500",
  "updated": "2014-03-03T13:00:17.802-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "Node.js\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2012-02-28T14:14:47.192-0500",
      "body": "Committed with revision f2a883efe711374f5340083314a6207a6ff7d4d2\n"
    }
  ]
}
---
Enable console and fluid.logging in infusion node module. Currently fluid logging is not available in infusion module because node console is needs to be part of the context where fluid object is initialized.

        