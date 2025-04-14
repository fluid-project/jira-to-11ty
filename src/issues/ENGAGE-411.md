---json
{
  "title": "ENGAGE-411",
  "summary": "Grid/list view modes are not persistent--forgets the view mode after going to another screen",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-02-19T11:29:55.000-0500",
  "updated": "2017-12-22T09:44:31.511-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Catalogue",
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:31.510-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
To replicate:

* Go to Catalogue view (currently defaulted to list view)
* Switch to grid view
* Go to any artifact
* Tap back
* Catalogue view is now back to list view (even though we left it at grid view)

The issue exists for the default Catalogue, "view all", and "view all" within a theme, as well as My Collection.

        