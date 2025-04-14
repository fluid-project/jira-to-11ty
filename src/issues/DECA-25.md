---json
{
  "title": "DECA-25",
  "summary": "Stitching and other post-capture processing should run asynchronously ",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-25T14:30:48.000-0400",
  "updated": "2012-06-08T12:33:00.619-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-100/",
      "key": "DECA-100",
      "summary": "Evaluate the application of decapod-stitching script"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-22/",
      "key": "DECA-22"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-08T12:33:00.608-0400",
      "body": "Stitching was removed and pdf generation is now run asynchronously\n"
    }
  ]
}
---
Stitching images and other post-capture processing should run asynchronously after capture, and UI updated as processing proceeds.

        