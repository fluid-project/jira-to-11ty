---json
{
  "title": "DECA-47",
  "summary": "Display a confirmation message after deleting an image",
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
  "date": "2010-02-22T11:57:28.000-0500",
  "updated": "2012-01-10T09:46:51.005-0500",
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
      "date": "2010-03-15T09:59:09.000-0400",
      "body": "Showing a message implemented. It has not been tested though.\n"
    }
  ]
}
---
Add a function that shows a information/error message with a specified content (and allows for different styling based on the message type). It should be reusable by all kinds of actions showing messages. The function should be invoked after the user successfully deletes an image.

        