---json
{
  "title": "DECA-152",
  "summary": "Reordering target does not consistently land where expected",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-07-21T11:15:11.973-0400",
  "updated": "2012-05-25T13:44:01.813-0400",
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
      "date": "2012-05-25T13:44:01.813-0400",
      "body": "The page for managing the images has been removed from the decapod 0.5 release\n"
    }
  ]
}
---
Justin mentioned this is likely due to the use of grid reordering instead of list reordering.

        