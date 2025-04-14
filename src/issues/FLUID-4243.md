---json
{
  "title": "FLUID-4243",
  "summary": "Remove buttons from Uploader Demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2011-05-16T12:50:35.151-0400",
  "updated": "2011-06-20T15:32:18.289-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4242/",
      "key": "FLUID-4242"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-05-16T13:48:18.012-0400",
      "body": "Removed all three buttons from the Uploader demo.  Pull request has been made.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T13:42:58.070-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-18T09:06:18.015-0400",
      "body": "reopening to change status to \"needs commit\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-05-19T16:05:12.056-0400",
      "body": "I reviewed Mike's code changes and merged them into the project repo at <https://github.com/fluid-project/infusion/commit/42547847b524b903b3297c25d5378e1114e12e40>. Made tweaks and committed at <https://github.com/fluid-project/infusion/commit/cb05d2b2c16401a9a977d1255f23c23488387bb1>\n"
    }
  ]
}
---
Remove the Uploader demo buttons.   They are no longer necessary as we now have integration tests that test all three configurations (concrete, IoC, and IoC demands).

        