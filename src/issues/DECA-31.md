---json
{
  "title": "DECA-31",
  "summary": "When dragging thumbnail, Drag avatar's layout changes",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-03-10T15:24:35.000-0500",
  "updated": "2012-01-10T09:47:59.230-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-03-10T17:10:02.000-0500",
      "body": "With Rev 9650 there is better styling for the drag avatar. However, the border does not show up if user is dragging item that was not selected.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-03-11T13:44:21.000-0500",
      "body": "With Rev 9654, this issue should be resolved. Could not get a border to render with the drag avatar, but adding a background colour gave it the necessary visual boundary.\n"
    }
  ]
}
---
The drag avatar for a thumbnail looks different than the original thumbnail. It should have at least the same layout.

        