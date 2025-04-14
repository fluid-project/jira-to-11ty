---json
{
  "title": "SJRK-85",
  "summary": "Create CouchDB View for Browse Interface",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2018-04-27T14:59:32.774-0400",
  "updated": "2018-05-15T16:55:27.794-0400",
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
      "author": "Alan Harnum",
      "date": "2018-05-15T16:55:27.790-0400",
      "body": "Done as part of the larger <https://fluidproject.atlassian.net/browse/SJRK-56#icft=SJRK-56> branch.\n"
    }
  ]
}
---
For the browse interface, we'll need a CouchDB view that contains a collection of stories minus the (potentially very lengthy) **content** block that represents all the block content.

This should be achievable with a CouchDB map/reduce.

        