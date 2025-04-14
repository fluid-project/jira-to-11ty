---json
{
  "title": "ENGAGE-119",
  "summary": "a timeout fetching the json data occurs when trying to load the browse.html page.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-13T16:48:13.000-0400",
  "updated": "2009-11-03T11:51:38.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-13T17:49:00.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-14T10:53:43.000-0400",
      "body": "changed async to true\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:51:38.000-0500",
      "body": "closed as the change to async fixed the issue.\n"
    }
  ]
}
---
a timeout fetching the json data occurs when trying to load the browse.html page.

The error doesn't seem to occur on every page visit, but looking at resource loading, it appears the bottle neck occurs on the loadData.js or the browse.js files.

Changing the ajax option async to true in loadData.js, seems to solve the issue.

        