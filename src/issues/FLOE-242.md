---json
{
  "title": "FLOE-242",
  "summary": "Upgrade pouchDB to get it back working with the latest safari",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-09-29T16:18:52.966-0400",
  "updated": "2014-09-30T12:21:06.749-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool",
    "Feedback Tool"
  ],
  "environment": "Safari 7.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-09-30T10:31:05.614-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/metadata/pull/45>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-09-30T12:21:03.328-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/metadata/pull/45> ) into the project repo at f6dc665487eac9b7b248630d4fc2f10b7d1daaf1\n"
    }
  ]
}
---
Using metadata feedback tool and authoring tool with Safari 7.1 throws javascript error: DOM IDBDatabase exception 8

PouchDB has fixed the issue with a new release: <http://pouchdb.com/2014/09/22/3.0.6.html>

We need to upgrade pouchDB in metadata demos to this latest release.

        