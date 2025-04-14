---json
{
  "title": "SJRK-426",
  "summary": "Add tests for database functions",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-11-13T11:07:18.732-0500",
  "updated": "2020-12-13T17:39:57.794-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-12-13T17:39:57.794-0500",
      "body": "When this is tackled, care should be taken to configure nyc to include the DB functions, as the work of <https://fluidproject.atlassian.net/browse/SJRK-405#icft=SJRK-405> excludes them\n"
    }
  ]
}
---
Add tests for the functions contained within the database setup script file: story-dbConfiguration.js

There are some small functions in the DB setup script that represent CouchDB view functions, though unfortunately those functions are not currently covered by any tests. This is especially pertinent after SJRK-425.

        