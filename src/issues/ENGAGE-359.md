---json
{
  "title": "ENGAGE-359",
  "summary": "Captions for thumbnails in Navigation List should be truncated when the extend beyond a certain length",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2010-02-08T17:40:44.000-0500",
  "updated": "2010-02-26T12:41:55.000-0500",
  "versions": [
    "0.1",
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-24T13:53:23.000-0500",
      "body": "This was done for the exhibition home page, but it should be part of the navigation list itself\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-26T12:41:55.000-0500",
      "body": "This has been fixed already, the issue in the above comment filed as <https://fluidproject.atlassian.net/browse/ENGAGE-463#icft=ENGAGE-463>\n"
    }
  ]
}
---
At the moment, Navigation List will show the full caption of a thumbnail in grid view, even when it's very long. We should truncate captions like in the wireframe.

        