---json
{
  "title": "SJRK-323",
  "summary": "Add server configuration to versioning",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-02-06T16:58:57.335-0500",
  "updated": "2020-02-06T16:58:57.335-0500",
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
In order to facilitate server configuration tasks like locking and unlocking authoring, add the server configuration file to the repository for each deployed branch. Consider whether this should be done across the board (i.e. in master as well), as well as whether to keep the example config file in that case.

        