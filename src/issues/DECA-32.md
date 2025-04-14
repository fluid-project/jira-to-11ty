---json
{
  "title": "DECA-32",
  "summary": "Decapod: Dragging action in Image Reorderer with centered fixed-width layout causes margins to stutter",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-05T16:36:11.000-0500",
  "updated": "2012-01-10T09:52:58.461-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Capture"
  ],
  "environment": "Windows 7, FF3.6, rev. 9583\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-03-23T21:15:32.000-0400",
      "body": "No longer an issue because UI uses 100% of available space.\n"
    }
  ]
}
---
In Decapod, when starting to drag a thumbnail, the margins in the parent container stutter briefly.

This occurs when the parent uses a fixed width and left and right margins set to auto.

With left margin set to a fixed value (and no right margin), this problem does not appear.

        