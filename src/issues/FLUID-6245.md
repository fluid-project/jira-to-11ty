---json
{
  "title": "FLUID-6245",
  "summary": "Cannot use fluid.messageResolver from within Node.js.",
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
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-02-08T06:39:34.948-0500",
  "updated": "2024-07-22T08:59:30.935-0400",
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
      "author": "Tony Atkins [RtF]",
      "date": "2018-02-08T06:44:10.866-0500",
      "body": "<https://github.com/fluid-project/infusion/pull/872>\n"
    }
  ]
}
---
As part of FLUID-6223, I moved the message resolver into its own file.  This works for the Infusion browser tests, but is not included by default from within Node.  This pull fixes this omission.

        