---json
{
  "title": "DECA-83",
  "summary": "Add stitch image support for captured images",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-03-23T13:31:34.000-0400",
  "updated": "2012-01-10T09:41:36.624-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Add stitching of images from captured images.

Can use imagemagick to perform this:\
convert decapod-0001.jpg decapod-0002.jpg +append decapod-0001-0002.jpg

        