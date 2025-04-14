---json
{
  "title": "ENGAGE-280",
  "summary": "Ensure that all engage pages have the correct meta data in the head, to run properly as an iPhone home screen webapp",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-01-22T10:35:23.000-0500",
  "updated": "2010-02-12T13:56:59.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:10:55.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-09T10:49:24.000-0500",
      "body": "All pages currently in the repository have the following meta tags added:\n\n\\<meta name=\"viewport\" content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;\" />\\\n\\<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n\nThe home page also has the \\<link> pointing at the icon that will show up on the homescreen.&#x20;\n\nNote that the My Collections component still hasn't been merged into trunk, but looking at the branch, it seems that the html file already has the correct meta tags.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-09T10:49:55.000-0500",
      "body": "closed, but had meant to resolve, I have reopened and now changed the status to resolved.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T13:56:59.000-0500",
      "body": "I've reviewed all of Justin's changes for this issue and they look good and work correctly. +1 for inclusion in Engage 0.3b\n"
    }
  ]
}
---
Ensure that all engage pages have the correct meta data in the head, to run properly as an iPhone home screen webapp

        