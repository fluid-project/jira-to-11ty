---json
{
  "title": "FLUID-4905",
  "summary": "Update an existing UIO store grade",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2013-01-18T12:53:14.409-0500",
  "updated": "2013-10-04T09:18:57.502-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-06-12T11:20:45.452-0400",
      "body": "Fixed as part of work for <https://fluidproject.atlassian.net/browse/FLUID-4686#icft=FLUID-4686>.\n"
    }
  ]
}
---
Currently defaults for settings are stored within the UIO store grade. This needs to update, since UIO will start deriving defaults for settings from within the given schema. Perhaps a good approach would be to have this default model derivation from schema inside the new common UIO store grade.

        