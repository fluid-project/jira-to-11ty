---json
{
  "title": "SJRK-405",
  "summary": "Implement server side logic for signup/login/logout and session support",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-10-22T16:00:52.642-0400",
  "updated": "2021-01-21T09:37:44.382-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-439/",
      "key": "SJRK-439"
    },
    {
      "type": "Dependence",
      "url": "/browse/SJRK-440/",
      "key": "SJRK-440"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-01-21T09:37:44.352-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/105> ) into project repo at 3845afd05c22ba96283c4558581b90e69ea47319\n"
    }
  ]
}
---
Implement the server-side logic required to allow users to:

* Sign up / register
* Log in
* Log out

This will include:

* Session support
* Ability to create and save user information to and retrieve it from the database
* Associating published stories with their author accounts
* Continue to support guest publishing
* Password policy implementation

For the Minimum Valuable Product that we aim to produce, it will be enough to have the user automatically sign in once they register. A confirmation system (via email or similar) should be implemented once time allows.

        