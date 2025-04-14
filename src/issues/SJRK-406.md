---json
{
  "title": "SJRK-406",
  "summary": "Create server endpoint to delete story",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-22T16:09:38.437-0400",
  "updated": "2020-10-29T13:30:34.384-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Implement a server route/endpoint to delete a story.

There is currently a URL under the "/admin" path and gated with Basic Authentication that allows stories to be deleted, but this needs to be an endpoint that any authenticated & authorized user can use to delete a story they have the rights to manage (i.e. they are the author or the admin)

        