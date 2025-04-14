---json
{
  "title": "SJRK-404",
  "summary": "Implement UI for logout",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2020-10-21T14:09:29.908-0400",
  "updated": "2021-02-26T10:57:50.945-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2021-02-26T10:57:50.944-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/111) that implements this feature has been merged into the main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/e8fb396d078ee557b6ee58b7d58805ddc9d47fe1).\n"
    }
  ]
}
---
Implement the UI for logging out in the Storytelling Tool.

* All pages need to have this
* For our "Minimum Valuable Product", no account options, just a "log out" link/button
* If we can handle the markup for logout/user id rendering on the server, the client only needs the session ID

        