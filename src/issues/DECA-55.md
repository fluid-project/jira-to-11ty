---json
{
  "title": "DECA-55",
  "summary": "Thumbnail image does not scale to fit the container",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-30T17:29:56.000-0400",
  "updated": "2012-05-25T13:32:42.845-0400",
  "versions": [
    "0.3"
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
      "date": "2012-05-25T13:32:42.844-0400",
      "body": "The UI no longer shows thumbnails\n"
    }
  ]
}
---
The thumbnail image does not scale to make use of available space in the thumbnail container. This results in unnecessary white space.

        