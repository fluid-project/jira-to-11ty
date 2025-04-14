---json
{
  "title": "SJRK-356",
  "summary": "Display meaningful error messages from backend errors",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Giovanni Tirloni",
  "date": "2020-05-06T16:52:35.340-0400",
  "updated": "2020-05-06T16:54:55.648-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-351/",
      "key": "SJRK-351",
      "summary": "Display meaningful error message for publishing errors"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When the /stories endpoint reports an error (e.g. HTTP 500 coming from a database down situation), the UI currently displays a blank page without information.

It'd be interesting to surface an error message to the user so they are not stuck wondering what is happening.

        