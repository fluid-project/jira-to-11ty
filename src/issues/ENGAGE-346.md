---json
{
  "title": "ENGAGE-346",
  "summary": "My Collection's CouchDB views should be added to the daily build database",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Colin Clark",
  "date": "2010-02-08T16:32:06.000-0500",
  "updated": "2010-02-12T14:30:45.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:32:34.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-09T16:09:55.000-0500",
      "body": "I've add all of the necessary views to the daily build instance of Couch. Here are the requisite links:\n\nUsers: <http://142.150.154.59:5984/_utils/document.html?users/_design/lucene>\\\nMcCord: <http://142.150.154.59:5984/_utils/document.html?mccord/_design/lucene>\n\nSveto, can you review these and confirm that I do indeed have the views in the correct places now?\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-11T08:45:34.000-0500",
      "body": "The views are correctly placed and functional.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T14:30:45.000-0500",
      "body": "Took a look, the views seem to be in place in couch\n"
    }
  ]
}
---
My Collection includes several Couch views. These should be added to the daily build database so we can test and use My Collection in a fully integrated form.

        