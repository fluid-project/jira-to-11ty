---json
{
  "title": "SJRK-60",
  "summary": "Configure Docker for server code and storage",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-03-19T11:58:00.810-0400",
  "updated": "2018-05-29T10:30:21.760-0400",
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
* Set up a Dockerfile for the server project (sjrk-story-telling-server)
* Determine how to get a CouchDB container set up using fluid-couch-config
* Add whatever configurability is needed to allow us to wire containers together, perhaps with <https://github.com/the-t-in-rtf/gpii-launcher>
* Set up a Docker Compose file which brings together all of the containers required to host the Storytelling Tool

        