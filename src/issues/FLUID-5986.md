---json
{
  "title": "FLUID-5986",
  "summary": "VM-based tests should run the basic node tests as well as the browser tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-10-20T11:17:13.043-0400",
  "updated": "2016-10-24T16:47:09.780-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5985/",
      "key": "FLUID-5985",
      "summary": "Fix trunk-breaking bug introduced by FLUID-5973 in non-browser contexts"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5744/",
      "key": "FLUID-5744"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-10-20T15:46:18.485-0400",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/767>\n"
    }
  ]
}
---
Per discussion at <https://github.com/fluid-project/infusion/pull/577#issuecomment-255135550> and the bug patch at <https://issues.fluidproject.org/browse/FLUID-5985>, we should run the basic node tests as part of the VM test runner in addition to the browser tests. This will help catch any problems with packaging for node that might be introduced by browser-oriented code changes.

        