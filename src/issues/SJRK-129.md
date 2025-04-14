---json
{
  "title": "SJRK-129",
  "summary": "Write tests for sjrk.storyTelling.server.browseStoriesHandler.extractFromCouchResponse",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T15:14:03.247-0400",
  "updated": "2018-11-28T12:12:53.747-0500",
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
sjrk.storyTelling.server.browseStoriesHandler.extractFromCouchResponse, a function that assembles the expected JSON structure for the client-side browse from a CouchDB view result, should have tests with mock data to ensure it's working as intended.

        