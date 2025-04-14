---json
{
  "title": "DECA-272",
  "summary": "Decapod server should make use of genpdf JSON status file",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2012-06-08T15:26:41.115-0400",
  "updated": "2012-07-10T13:48:07.028-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
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
      "date": "2012-07-05T13:04:17.757-0400",
      "body": "pdf.py will now update the status with the stage from genpdf's progress file when the getStatus method is called and an export is in progress.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-server-iteration4>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T13:45:56.958-0400",
      "body": "Merged into the googlecode repo\n"
    }
  ]
}
---
The Decapod server currently does not use the genpdf status file. The server should read updates from this file and post them to the client (i.e. the Exporter).

        