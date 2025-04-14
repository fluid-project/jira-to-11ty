---json
{
  "title": "SJRK-160",
  "summary": "Investigate multiple message files per template file",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-07-12T16:38:02.953-0400",
  "updated": "2018-07-12T16:38:02.953-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Determine if it is possible to load more than one localized message bundle file for a given templateManager and handlebars template.

E.g. a new template has been created and refers to message values A and B. Message value A is in a.json and message B is in b.json. Is there a way to load the template and inject both A and B values simultaneously?

        