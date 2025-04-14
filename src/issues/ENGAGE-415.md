---json
{
  "title": "ENGAGE-415",
  "summary": "My Collection thumbnails are using scaled full images w/ padding instead of cropped images",
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
  "date": "2010-02-19T14:07:13.000-0500",
  "updated": "2017-12-22T09:44:30.606-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-486/",
      "key": "ENGAGE-486",
      "summary": "Data in CouchDB should be stored in the single database in order to allow fancy view manipulations (join, etc.)."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-19T14:58:34.000-0500",
      "body": "cropped images are used everywhere else.\n"
    },
    {
      "author": "y z",
      "date": "2010-03-02T15:10:19.000-0500",
      "body": "Currently myCollection is using artifactView view to fetch the artifacts. They are consequently mapped using a standard artifact mapping thus the thumbnail image is actually the largest image available for the artifact. This needs to fixed using a new couchdb data source model.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:30.604-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---

        