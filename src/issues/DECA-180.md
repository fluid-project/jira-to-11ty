---json
{
  "title": "DECA-180",
  "summary": "refactor export to support polling",
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
  "date": "2011-10-17T10:45:59.886-0400",
  "updated": "2012-01-10T09:28:53.798-0500",
  "versions": [],
  "fixVersions": [
    "0.5a"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-10T09:28:35.536-0500",
      "body": "A basic version of this was implemented in <https://fluidproject.atlassian.net/browse/DECA-189#icft=DECA-189>. There will need to be improvements as the designs are further implemented and refined and code refactored. However these should be filed under specific jiras as necessary.\n"
    }
  ]
}
---
Refactor the way export works so that it polls the server to determine when the export is complete. At the moment I believe it just sits and waits for a response.

        