---json
{
  "title": "ENGAGE-381",
  "summary": "Messages and code entry are not live regions",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-02-12T14:54:13.000-0500",
  "updated": "2010-02-26T11:03:34.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-26T11:03:34.000-0500",
      "body": "Unfortunately Safari doesn't support live regions. So we will have to come up with another strategy.\n\nHere is link to Apple's Safari documentation about their supported aria roles\n\n<http://developer.apple.com/safari/library/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/AccessibilityRoles.html>\n"
    }
  ]
}
---
Messages and code entry are not live regions

There needs to be live region support on the page so that a screen reader user will know when a message appears, and what the entered code is as it changes.

        