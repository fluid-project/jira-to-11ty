---json
{
  "title": "FLUID-4791",
  "summary": "Removing of a firer listener by namespace will fail if there was no listener registered with such namespace.",
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
  "reporter": "y z",
  "date": "2012-09-06T10:50:09.476-0400",
  "updated": "2014-03-03T12:41:13.119-0500",
  "versions": [
    "1.4"
  ],
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
      "author": "y z",
      "date": "2012-09-06T10:59:19.975-0400",
      "body": "Pull request can be found here: <https://github.com/fluid-project/infusion/pull/241>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-12-14T03:14:58.570-0500",
      "body": "Merged into repo for 1.5\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T12:41:09.883-0500",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/241> ) was merged into the project repo at 86cd92ea9e917b801e3f0c9246b14d4f15e2969b\n"
    }
  ]
}
---
If you have an event firer and you try to remove a listener using a namespace that was never registered, the result is going to be a js error.

        