---json
{
  "title": "ENGAGE-122",
  "summary": "Fix Artifact View not displaying the default image when no image exists",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2009-10-14T11:42:57.000-0400",
  "updated": "2009-11-10T15:18:42.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-10T15:18:42.000-0500",
      "body": "This was fixed, if no image is given, there isn't an attempt to render the image\n"
    }
  ]
}
---
Need not to display the broken image in case where artifact doesn't have one.

        