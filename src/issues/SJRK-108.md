---json
{
  "title": "SJRK-108",
  "summary": "Extract dynamicViewComponentManager grade to separate project",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T15:23:21.061-0400",
  "updated": "2018-05-31T15:23:21.061-0400",
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
The dynamicViewComponentManager grade is generally useful; the code and tests should be extracted to a separate project that the UI can pull in as a dependency, to make it easier to use in other contexts.

        