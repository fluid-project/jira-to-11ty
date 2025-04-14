---json
{
  "title": "SJRK-340",
  "summary": "Add top-level template and message path options to UI grade",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-04-17T13:50:28.671-0400",
  "updated": "2020-04-17T13:50:28.671-0400",
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
Add top-level options to the UI grade to configure the template and message file paths for the templateManager component. This will allow extending grades to be a little tidier, and no longer presupposes knowledge about the inner templateManager component in order to be configured.

        