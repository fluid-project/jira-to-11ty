---json
{
  "title": "FLUID-6520",
  "summary": "Do not run tests on IE11 anymore",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-06-16T10:42:53.652-0400",
  "updated": "2020-06-30T10:07:21.833-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6519/",
      "key": "FLUID-6519"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-06-30T10:07:17.798-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/995> ) into the project repo at 742275f3a7e0a7ba3e0fce35009096c3410eaba4\n\n \n"
    }
  ]
}
---
Following the deprecation of IE11 support, tests should not run for it.

<http://fluid.2324889.n4.nabble.com/Proposal-to-remove-IE-11-support-from-Infusion-td10852.html>

        