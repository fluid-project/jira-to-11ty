---json
{
  "title": "FLUID-6557",
  "summary": "Update Infusion to use fluid-grunt-lint-all.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2020-10-02T05:10:56.983-0400",
  "updated": "2024-07-22T10:35:14.174-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2020-12-16T08:13:30.711-0500",
      "body": "This was taken care of a while ago, master now uses fluid-grunt-lint-all.\n"
    }
  ]
}
---
Currently, master lints using the deprecated gpii-grunt-lint-all@1.0.7.  This ticket updates that to use the latest version of the replacement, fluid-grunt-lint-all@1.0.8.

        