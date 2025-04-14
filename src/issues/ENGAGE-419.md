---json
{
  "title": "ENGAGE-419",
  "summary": "Displayed date of comments is always in English",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "James Yoon",
  "date": "2010-02-19T14:47:51.000-0500",
  "updated": "2014-03-03T13:46:42.165-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View",
    "Comments",
    "Exhibitions",
    "Internationalization"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-02-19T19:46:47.000-0500",
      "body": "Fixed at revision 9461. We should eventually have an integrated strategy for managing semi-persistent state (URL state, cookies, session etc.) but for now the server pushes the same information into component options that it pushes into the URL.\n"
    }
  ]
}
---

        