---json
{
  "title": "ENGAGE-493",
  "summary": "Mount the new faster Screen Navigation-based home at the \"home/home.html\"",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2010-03-04T19:49:56.000-0500",
  "updated": "2010-03-09T15:21:09.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Screen Navigator"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-04T19:50:03.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-04T20:00:11.000-0500",
      "body": "Fixed at r9578. Michelle, can you review?\n"
    }
  ]
}
---
At the moment, we have the fast version of the application mounted at mobileHome/mobileHome.html, while preserving the slow, chromeful version at home/home.html. To avoid forcing Hugues to update all his iPod home screen icons, let's mount the Screen Navigator's home at home/home.html and move the regular home to app/home.html

        