---json
{
  "title": "DECA-230",
  "summary": "Rename ImportExportController to ExportController",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-01-30T15:46:48.715-0500",
  "updated": "2012-05-18T14:21:40.512-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-30T16:00:22.888-0500",
      "body": "Renamed the ImportExportController to ExportController.\n\nThe work is currently in my bitbucket repo\\\n<https://jobara@bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:21:37.654-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
For Decapod 0.5a, to reduce the chance of breakage, a lot of the old unused code was left in place. Because of this, there was already an ExportController. Now that it has been removed, the ImportExportController should be properly renamed to ExportController

        