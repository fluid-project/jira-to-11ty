---json
{
  "title": "SJRK-213",
  "summary": "Add Node tests as part of build",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-02-04T18:50:09.006-0500",
  "updated": "2019-02-04T18:50:09.006-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Add a step in the build process to run the Node tests (/tests/all-tests.js) after the NPM install has completed.

        