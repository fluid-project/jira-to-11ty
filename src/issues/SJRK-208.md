---json
{
  "title": "SJRK-208",
  "summary": "Add tests for story deletion",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-01-28T17:32:32.313-0500",
  "updated": "2019-01-28T17:32:32.313-0500",
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
Add tests to ensure sjrk.storyTelling.server.deleteStoryHandler is working as expected. These tests should include:

* tests of the file-system to ensure any files associated with a deleted story are moved to the recovery directory
* calls to the handler itself
* tests of each of the functions used as part of the handler

Tests for sjrk.storyTelling.server.isValidMediaFilename have already been added, but should be reviewed for completeness.

        