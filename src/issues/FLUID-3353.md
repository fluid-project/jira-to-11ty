---json
{
  "title": "FLUID-3353",
  "summary": "Create a script that automatically deploys the Infusion Builder to the production server.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-03T14:22:50.000-0500",
  "updated": "2009-12-02T13:37:06.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Our goal is to provide a very clear, simple process for deploying the Infusion Builder during the release process. As a result, we need to create a script that automates as much of the process as possible.

We should probably do this using an Ant-based deploy process.

        