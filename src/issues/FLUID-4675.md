---json
{
  "title": "FLUID-4675",
  "summary": "Stub out require() and fluid.require() when testing code in the browser",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2012-03-09T16:22:07.575-0500",
  "updated": "2024-07-22T11:02:53.167-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Now that Infusion is packaged as a Node.js module and can be successfully loaded using .require(), we need a testing stub that allows us to take code that uses require() or fluid.require() and run it the browser. Any calls to either function should return a copy of Infusion if it is being required, otherwise should throw an error.

        