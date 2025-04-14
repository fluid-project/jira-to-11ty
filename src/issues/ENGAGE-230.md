---json
{
  "title": "ENGAGE-230",
  "summary": "Implement a means for bookmarking and history support of content within the Screen Navigator",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-09-15T13:27:03.000-0400",
  "updated": "2010-03-09T15:15:53.000-0500",
  "versions": [],
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
      "author": "Justin Obara",
      "date": "2010-02-26T11:09:22.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-09T15:00:03.000-0500",
      "body": "I fixed this issue at r9574 with the inclusion of the jquery.hashchange plugin.\n"
    }
  ]
}
---
At the moment, the Screen Navigator component provides a means for navigating between documents displayed on a phone. In order to provide seamless transitions between pages, we update the DOM via ajax instead of reloading the page. As a result, we break bookmarkability and history support.

Most AJAX apps have settled on a solution that uses URL fragments to support bookmarkability. While this isn't ideal, it should work quite nicely with a bit of help from the server-side.

        