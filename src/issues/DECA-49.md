---json
{
  "title": "DECA-49",
  "summary": "Display a confirmation dialog before deleting an image",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Boyan Sheytanov",
  "reporter": "Boyan Sheytanov",
  "date": "2010-02-17T07:34:17.000-0500",
  "updated": "2010-04-12T13:07:25.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Boyan Sheytanov",
      "date": "2010-03-15T09:57:06.000-0400",
      "body": "Confirmation dialog added. Test now fail due to that. Need to find a way to test the dialog (simulate a click on the 'Yes' button).\n"
    }
  ]
}
---
Add a function that invokes a confirmation dialog with a specified content (and returns true or false depending on the user response). It should be reusable by all kinds of actions requiring confirmation. The function should be invoked when the user wants to delete an image.

        