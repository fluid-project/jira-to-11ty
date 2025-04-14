---json
{
  "title": "FLUID-3411",
  "summary": "Change external infusion version to be current release",
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
  "date": "2009-12-04T13:35:48.000-0500",
  "updated": "2010-03-30T13:28:00.000-0400",
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
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-12-04T17:55:10.000-0500",
      "body": "To be clear, we need to update the Infusion external of Builder to point to the **1.1.2 tag** before we start bug parade for the Builder.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-04T18:00:28.000-0500",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T13:28:00.000-0400",
      "body": "This was a Builder-specific release task that was implemented at the time, and is now redundant.\n"
    }
  ]
}
---
Currently the .externals file refers to the latest build of infusion. We will need to change that to the current release before QA

        