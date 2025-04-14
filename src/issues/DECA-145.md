---json
{
  "title": "DECA-145",
  "summary": "After deleting the last page spread, page spread number remains on the thumbnail",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-07-15T16:16:40.754-0400",
  "updated": "2012-05-25T13:41:59.761-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:41:59.760-0400",
      "body": "The page for managing the images has been removed from this release\n"
    }
  ]
}
---
To replicate:\
1\. Capture a page spread.\
2\. Delete page spread.\
3\. "1-2" is still in the upper left-hand corner of the thumbnail.

        