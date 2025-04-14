---json
{
  "title": "ENGAGE-387",
  "summary": "CouchDB query keys cannot be guaranteed to be issued in a stable order",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-02-12T18:27:33.000-0500",
  "updated": "2014-03-03T13:47:18.154-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-02-12T18:31:04.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-13T02:03:07.000-0500",
      "body": "Believed fixed at rev 9396 - please review\n"
    }
  ]
}
---
As noted in <https://fluidproject.atlassian.net/browse/ENGAGE-383#icft=ENGAGE-383>, we are using plain JSON.stringify to serialise mini-objects which are issued as Couch keys. This does not guarantee to emit the keys in a stable order, although we have generally "been lucky" so far. The breakage of 2 views over the weekend was as a result of an apparently unrelated change which disturbed the order of key serialisation. In order to ensure that the entire system does not unexpectedly break when in production, we need a custom serializer for these structures which guarantees that keys are emitted in the order determined in the map.js function

For reference, collation rules here:

<http://wiki.apache.org/couchdb/View_collation>

        