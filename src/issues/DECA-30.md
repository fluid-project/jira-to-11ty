---json
{
  "title": "DECA-30",
  "summary": "Thumbnails not being generated properly when capturing with pair of cameras",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-03-23T10:26:37.000-0400",
  "updated": "2012-01-10T09:53:08.357-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Capture"
  ],
  "environment": "FF 3.5.8, Ubuntu 9.10\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-03-23T13:49:38.000-0400",
      "body": "Fixed in rev 9706\n"
    }
  ]
}
---
Thumbnails are not being generated after images are captured by cameras and saved to the local directory.

Currently the code is just scaling down a large version of the images which is inefficient.

        