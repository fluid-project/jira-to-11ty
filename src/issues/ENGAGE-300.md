---json
{
  "title": "ENGAGE-300",
  "summary": "From chromeless home screen, tapping on a link starts a new browser setting with chrome",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "James Yoon",
  "date": "2010-01-27T10:59:43.000-0500",
  "updated": "2010-02-03T11:24:30.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Mobile"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-01T17:49:06.000-0500",
      "body": "Here's a thread from fluid-work describing the technical issues involved with chromeless home screens on the iPhone:\n\n<http://old.nabble.com/Chromelessness-in-Engage-0.3-td27388098.html>\n\nNote that Android phones don't really have this problem because the browser is, by default, mostly chromeless.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-01T17:52:40.000-0500",
      "body": "This issue was resolved for all current top-level pages in Engage 0.3 at r9221.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-01T17:53:28.000-0500",
      "body": "James, I'll give you the pleasure of closing this one after you've had a chance to test it.\n\nPresumably then we'll file a new bug about the fact that users can't go back because there's no navigation bar yet. 😉\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-03T11:24:30.000-0500",
      "body": "Works as advertised!\n"
    }
  ]
}
---
Proper behaviour should be that the the user remains within the chromeless setting.

        