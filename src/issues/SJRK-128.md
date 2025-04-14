---json
{
  "title": "SJRK-128",
  "summary": "Consider the sjrk.storyTelling.server.dataSource.couch.deleteStory dataSource's semantic",
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
  "date": "2018-06-01T15:10:43.758-0400",
  "updated": "2018-06-01T15:21:26.911-0400",
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
Kettle's dataSource implementation lacks a specific semantic for the HTTP DELETE operation. "the current DataSource semantic does not provide explicitly for deletion", per the documentation.

For deleting stories, sjrk.storyTelling.server.dataSource.couch.deleteStory uses writeMethod: DELETE to enable this, and arguably, this is an appropriate usage - it's a "write" operation that writes over the record.

There has been discussion in the past about having an explicit DELETE semantic in the Kettle datasource; we should consider whether or not this is necessary for the project, or if the use of "DELETE-write" is acceptable.

An additional consequence of this approach has been that we put the internal CouchDB \_rev value onto the readPayload of sjrk.storyTelling.server.dataSource.couch.story - this is arguably an unnecessary leakage of internal state to code used on the client side.

        