---json
{
  "title": "SJRK-403",
  "summary": "Implement UI for login",
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
  "date": "2020-10-21T14:06:52.623-0400",
  "updated": "2021-02-26T10:57:41.891-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-403/2020-10-22 Log In design.PNG",
      "filename": "2020-10-22 Log In design.PNG"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2021-02-03T12:42:13.660-0500",
      "body": "Things remaining are:\n\n* integration tests\n* validation\n* styling\n"
    },
    {
      "author": "Cindy Li",
      "date": "2021-02-26T10:57:41.890-0500",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/111) that implements this feature has been merged into the main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/e8fb396d078ee557b6ee58b7d58805ddc9d47fe1).\n"
    }
  ]
}
---
Implement the UI for logging into the Storytelling Tool. This should include form validation and error feedback, much like SJRK-402.

The error message should be identical in either case of an incorrect password or username, to mitigate [username enumeration attacks](https://www.hacksplaining.com/prevention/user-enumeration).

        