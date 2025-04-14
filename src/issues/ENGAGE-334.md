---json
{
  "title": "ENGAGE-334",
  "summary": "Home breaks the back button by redirecting to itself to add the language parameter",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2010-02-05T19:14:11.000-0500",
  "updated": "2017-12-22T09:44:25.747-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Home Screen"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:25.745-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, the Home screen will redirect to itself to add the language parameter if it isn't already present. This causes confusing browser back button behaviour, leading to the impression that the back button doesn't work on the home screen.

This issue is only really relevant in a chromed environment, so it may not matter for the McCord pilot.

        