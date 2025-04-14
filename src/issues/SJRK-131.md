---json
{
  "title": "SJRK-131",
  "summary": "Implement server-side validation of saved story models",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T15:30:13.301-0400",
  "updated": "2020-12-13T21:00:07.054-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-438/",
      "key": "SJRK-438",
      "summary": "Use fluid-json-schema to validate data migrations"
    }
  ],
  "attachments": [],
  "comments": []
}
---
We should have a means of validating the model to ensure it has no unexpected fields; <https://github.com/GPII/gpii-json-schema> might be an appropriate way of doing this.

At the same time, we should remove any fields from the client side that are not needed for persistence; the fileDetails field is one example of this, especially as it may be incorrect should images etc be resized.

        