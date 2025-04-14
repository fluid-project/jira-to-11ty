---json
{
  "title": "SJRK-24",
  "summary": "Make entire interface localized",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T16:08:54.760-0400",
  "updated": "2018-07-17T12:37:30.633-0400",
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
Consolidate the various localization-specific index files into one file, be it HTML or master handlebars template

* HTML \<title> and all messages should not be hardcoded
* consider language selection interface
* don't need multiple index files with near-identical content

        