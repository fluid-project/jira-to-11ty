---json
{
  "title": "FLUID-128",
  "summary": "Gallery Portlet POM files need to be updated to reflect the change from M2 to SNAPSHOT",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2007-11-27T09:36:38.000-0500",
  "updated": "2007-11-28T17:28:11.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-11-28T17:27:56.000-0500",
      "body": "Fixed.\n"
    }
  ]
}
---
The Gallery Portlet specifically depends on a sakai-image-gallery artifact of version M2. With the change in Sakai and the Gallery to versioning based on SNAPSHOT, the POM files need to be updated. This is, generally, a somewhat brittle approach, but will do for now.

        