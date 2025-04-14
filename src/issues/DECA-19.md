---json
{
  "title": "DECA-19",
  "summary": "Extend Decapod server to create thumbnails and full-sized images after capture",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2009-10-21T13:42:01.000-0400",
  "updated": "2012-01-10T09:51:08.249-0500",
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
      "author": "Boyan Sheytanov",
      "date": "2010-01-08T06:36:12.000-0500",
      "body": "This is now fixed - the server generates thumbnail images and returns paths to both the full-sized and the scaled image.\n"
    }
  ]
}
---
At the moment, the Decapod server is hard-wired to return a full-sized image. We should refactor it to capture the image, process it so that we have both thumbnail and full size images, and then modify the response of the server to return URLs for both images, which can then be immediately injected into the HTML.

        