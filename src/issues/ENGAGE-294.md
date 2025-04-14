---json
{
  "title": "ENGAGE-294",
  "summary": "Create a Couch view for search by object code",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-26T10:58:56.000-0500",
  "updated": "2010-02-12T12:25:04.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-01T05:38:39.000-0500",
      "body": "The following CouchDB view can be used for retrieval of artifacts based on artifact code.\n\n\"by\\_object\\_code\": {\\\n\"defaults\": {\\\n\"store\": \"no\"\\\n},\\\n\"index\": \"function(doc) {var ret = new Document(); ret.add(doc.artefacts.code); return ret;}\"\\\n}\n\nThe code itself needs to be a string and put inside the 'artefacts' field of the document. For example:\n\n{\\\n\"\\_id\": ...,\\\n\"rev\": ...,\\\n\"artefacts\": {\\\n...\\\n\"code\": \"27\",\\\n...\\\n}\\\n}\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-01T05:50:53.000-0500",
      "body": "Looking through the above view I realized that there might be different artifacts in the artefacts field, so I changed the view a bit to nest the object code deeper into artefacts.artefact:\n\n\"by\\_object\\_code\": {\\\n\"defaults\": {\\\n\"store\": \"no\"\\\n},\\\n\"index\": \"function(doc) {var ret = new Document(); ret.add(doc.artefacts.artefact.code); return ret;}\"\\\n}\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:49:58.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T12:25:04.000-0500",
      "body": "This is in couch and in the repository already.\n"
    }
  ]
}
---
We will require a Couch view in order to return artifact information to a user who has entered an object code on the object code entry screen.&#x20;

        