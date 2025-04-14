---json
{
  "title": "DECA-34",
  "summary": "Delete sometimes does not delete image.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-10T15:34:41.000-0500",
  "updated": "2010-07-15T16:12:58.356-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Capture"
  ],
  "environment": "Windows 7 FF3.6, Ubuntu 9.10 FF3.5.8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-14T11:21:02.084-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-07-15T16:12:58.353-0400",
      "body": "Verified as fixed.\n"
    }
  ]
}
---
Sometimes when deleting an image, the thumbnail does not disappear from the grid, even though a confirmation message has been displayed. After this has happened, you are unable to delete any other thumbnail from the grid.

Hard to say how this occurs, but seems to happen more frequently if deleting images quickly in succession.

        