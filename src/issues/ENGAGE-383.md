---json
{
  "title": "ENGAGE-383",
  "summary": "CouchDB appears to require that properties are listed in a specific order when specifying a composite key for a Couch view",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Colin Clark",
  "date": "2010-02-12T15:54:05.000-0500",
  "updated": "2010-02-12T17:07:46.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [],
  "components": [
    "Catalogue"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-12T17:07:46.000-0500",
      "body": "This is known behaviour in Couch DB, as outlined in this document on how view collation works:\n\n<http://wiki.apache.org/couchdb/View_collation>\n\nIt does raise the distinct possibility that, when deployed on a different VM, we'll have problems with JSON serialization and Couch Views. Time to write our own Couch-specific JSON serializer.\n"
    }
  ]
}
---
CouchDB appears to have a very strange bug. When using a composite key to a view, for example:

{\
key1: "foo",\
key2: "bar"\
}

You must ensure that the keys are listed in the same order as they were defined in the view, otherwise Couch will fail to match them. Since JavaScript objects don't specify a fixed order for keys (how could they?), this must be a bug in Couch itself.

If I were to speculate, perhaps Couch is comparing the stringified version of keys.

        