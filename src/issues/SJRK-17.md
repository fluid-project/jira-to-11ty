---json
{
  "title": "SJRK-17",
  "summary": "Discuss story ID management",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T15:32:23.223-0400",
  "updated": "2017-10-31T15:38:05.588-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Discuss a few things relating to ID's for stories:

* adding a prefix to the currently-generated UUID
* using an ID in a context other than CouchDB
* maintaining a separate ID in the model vs the couch instance
* evaluate use cases other than CouchDB and make sure our approach to generating ID's would work in those use cases
* adding date and time to an ID

        