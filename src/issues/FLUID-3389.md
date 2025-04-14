---json
{
  "title": "FLUID-3389",
  "summary": "use UUID for temporary file directories",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-25T10:52:20.000-0500",
  "updated": "2009-12-02T13:37:15.000-0500",
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
      "author": "Laurel Williams",
      "date": "2009-11-25T10:58:18.000-0500",
      "body": "changed from using session\\_id for temp directory names to using a UUID retrieved from Mysql.\n"
    }
  ]
}
---
Currently temporary files are stored in a directory named after the user's sessionid. This value is not unique. There is a risk that a user could start another build and overwrite files in a tmp directory before a build is complete. Instead, use a UUID. This can be obtained either from a php extension or from mysql.

        