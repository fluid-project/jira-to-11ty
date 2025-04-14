---json
{
  "title": "ENGAGE-412",
  "summary": "No \"load more\" functionality -- all artifacts/comments/etc. are always loaded",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-02-19T11:40:29.000-0500",
  "updated": "2017-12-22T09:44:24.519-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Artifact View",
    "Catalogue",
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-343/",
      "key": "ENGAGE-343"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:24.517-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
All items are always loaded, whereas there should be a default loading of x items, and the ability to "Load y more"

This occurs in the following places:

* Artifact view, comments listing
* My Collection
* An exhibition, catalogue
* An exhibition, guest book

        