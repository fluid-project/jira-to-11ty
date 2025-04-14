---json
{
  "title": "SJRK-127",
  "summary": "Review and refactor datasource code that accesses CouchDB views",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T14:43:40.114-0400",
  "updated": "2018-06-01T14:43:40.114-0400",
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
The current implementation of requesting a CouchDB view, sjrk.storyTelling.server.dataSource.couch.view, uses kettle.dataSource.URL rather than kettle.dataSource.CouchDB. The CouchDB-specific dataSource is a very lightweight extension of the URL dataSource with the assumption that you're accessing a standard CouchDB document.

However, from a certain perspective, there is no difference between a "regular" CouchDB document and a view document, though CouchDB treats view documents differently. So we should examine whether or not sjrk.storyTelling.server.dataSource.couch.view should simply be a properly-configured instance of kettle.dataSource.CouchDB

        