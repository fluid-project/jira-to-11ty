---json
{
  "title": "SJRK-111",
  "summary": "Ensure all event listeners have namespaces",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T15:58:08.539-0400",
  "updated": "2018-06-04T15:08:13.806-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-04T15:08:13.803-0400",
      "body": "UI project missing namespaces have been added, all tests passing. Server project had no missing namespaces.\n"
    }
  ]
}
---
To prevent overriding or collisions of event listeners, ensure they all have namespaces defined.

        