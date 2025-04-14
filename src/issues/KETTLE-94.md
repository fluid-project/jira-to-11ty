---json
{
  "title": "KETTLE-94",
  "summary": "Leveldown dependency required for PouchDB DataSource tests is unmaintained and no longer builds",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2025-01-27T09:29:09.353-0500",
  "updated": "2025-01-27T09:30:47.798-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As described in element chat relating to <https://github.com/fluid-project/kettle/pull/87> our leveldown dependency, indirect on fluid-pouchdb, is unmaintained and has become hard to build on versions of node 20 and later. Since PouchDB/CouchDB is no longer in active use in our community we should just remove these tests and dependency.

        