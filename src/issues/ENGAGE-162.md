---json
{
  "title": "ENGAGE-162",
  "summary": "Devise a data model for personal collections and users in Engage",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2009-10-21T17:49:38.000-0400",
  "updated": "2010-02-08T16:16:04.000-0500",
  "versions": [],
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
      "author": "Justin Obara",
      "date": "2010-02-05T14:22:05.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:15:59.000-0500",
      "body": "Sveto has implemented this issue in his branch. It still needs to be merged with trunk, which I am doing.\n"
    }
  ]
}
---
As part of implementing the My Collection feature of Engage, we'll need to work out a reasonable data model for personal collections and users within the system.&#x20;

Going with the document-oriented JSON approach offered by Couch, I assume that users will be a separate document within the system. For collections, I expect it will probably be as simple as an object which associates a user ID with an array of collection names in the system.

        