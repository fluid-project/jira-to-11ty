---json
{
  "title": "FLUID-2176",
  "summary": "OSDPL: Node paths for older design patterns should be updated to use designPatterns/ directory",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-29T13:52:50.000-0500",
  "updated": "2009-02-12T09:21:13.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-02-12T09:21:13.000-0500",
      "body": "Fixed.\n"
    }
  ]
}
---
With some changes to the PathAuto settings, design patterns that were previously published appear under /content but they should now appear under designPatterns/

Go into the database and update this information manually or find if there's a way to migrate these from PathAuto.

        