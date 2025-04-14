---json
{
  "title": "SJRK-294",
  "summary": "Store Edit page URL in config file",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-16T16:18:29.874-0400",
  "updated": "2019-09-16T16:18:29.874-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The URL for the edit page link at the top of the learningReflections and Cities themes is set in the message bundle for each theme (learningReflectionsMessages\_en.json and citiesMessages.json, respectively). Determine whether it would be better to store this value independently of the code via the server config file (sjrk.storyTelling.server.config.json5) or to leave it where it is, and make whatever changes are required.

        