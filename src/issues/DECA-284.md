---json
{
  "title": "DECA-284",
  "summary": "implement error handling and recovery in ui",
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
  "date": "2012-06-11T15:33:28.649-0400",
  "updated": "2012-09-04T13:17:57.134-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-249/",
      "key": "DECA-249",
      "summary": "Errors returned by the server are not handled by the UI"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When the server throws errors, the ui currently ignores them. It should take them into consideration and handle them appropriately.

        