---json
{
  "title": "ENGAGE-336",
  "summary": "Artifact View doesn't initialize correctly in the My Collection branch because its HTML file doesn't reference the necessary dependencies",
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
  "reporter": "Colin Clark",
  "date": "2010-02-08T13:12:58.000-0500",
  "updated": "2010-02-08T16:23:48.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:23:30.000-0500",
      "body": "I've committed a fix for this in the My Collection branch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:23:48.000-0500",
      "body": "Fixed at r9318\n"
    }
  ]
}
---
In the My Collection branch in the scratch pad, Artifact View throws an error upon load. This is due to the fact that it doesn't reference the new dependencies correctly, in particularly the following files:

* collectionOperations.js
* user.js
* jquery.cookie.js

        