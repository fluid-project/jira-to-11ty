---json
{
  "title": "KETTLE-81",
  "summary": "Create Postgres-backed DataSource implementation mirroring that of Couch grades",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-02-03T08:47:04.931-0500",
  "updated": "2020-02-03T08:47:04.931-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As our communities switch back towards SQL-based persistence, especially involving PostgreSQL, we need to widen our hierarachy of supported DataSource configurations to include SQL variants. This will be a light abstraction over the existing parameterised query system described in <https://node-postgres.com/features/queries> , transparent connection pooling, together with some basic support for transactions.

We need to think further about an issue which has been arising from time to time with DataSource design, where the "get" and "set" legs are asymmetric or perhaps the "get" leg is even nonexistent - this is much more common with RESTless designs such as SQL.

        