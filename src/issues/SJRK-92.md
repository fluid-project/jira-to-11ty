---json
{
  "title": "SJRK-92",
  "summary": "Move CouchDB single-node setup to fluid-couch-config",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-05-15T16:58:37.894-0400",
  "updated": "2018-05-15T16:58:42.270-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Another piece of generally useful functionality that should be moved to fluid-couch-config in time: <https://github.com/waharnum/sjrk-story-telling-server/blob/SJRK-56/src/js/db/singleNodeConfiguration.js>

Per some issues raised by @@Giovanni Tirloni<http://docs.couchdb.org/en/latest/install/setup.html>, this programmatically configures CouchDB in single-node mode, as described here: 

        