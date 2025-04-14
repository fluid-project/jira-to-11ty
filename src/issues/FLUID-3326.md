---json
{
  "title": "FLUID-3326",
  "summary": "create config.php for server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-10-23T13:14:45.000-0400",
  "updated": "2009-11-04T11:36:29.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3327/",
      "key": "FLUID-3327"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Create a config.php file which works automatically for the Infusion Builder using our default server installation configurations. Note that we still need to be careful not to include db details.

        