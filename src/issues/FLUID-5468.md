---json
{
  "title": "FLUID-5468",
  "summary": "Write unit tests to verify infusion node.js module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2014-07-11T10:59:17.249-0400",
  "updated": "2015-06-26T10:18:50.083-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Build Scripts",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-12-03T16:37:10.539-0500",
      "body": "Our infusion node.js module now has a reasonably good test driver at <https://github.com/fluid-project/infusion/tree/master/tests/node-tests>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:35.704-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Infusion has the ability to be packaged up as a node module, but there are no tests for the module. We should write some unit tests to confirm that the package was successfully created and functional.

        