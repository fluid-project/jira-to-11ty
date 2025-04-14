---json
{
  "title": "FLUID-4199",
  "summary": "Set the permissions for the temp and cache directories in the ant build script",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-05-03T12:28:32.142-0400",
  "updated": "2011-05-04T17:11:35.459-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-04T17:11:35.458-0400",
      "body": "Merged cindy's permission changes at cd24cc7986d1f6e243362934cb72468308eddfc6\n"
    }
  ]
}
---
The temp and cache directories do not have the correct permissions to be used in the daily build. These directories should have increased access to allow the server to add the cached and temp files.

        