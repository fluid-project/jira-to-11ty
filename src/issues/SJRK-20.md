---json
{
  "title": "SJRK-20",
  "summary": "Discuss authorship management",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Epic",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T15:42:31.863-0400",
  "updated": "2020-12-13T21:12:54.958-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-413/",
      "key": "SJRK-413"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-53/",
      "key": "SJRK-53"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-54/",
      "key": "SJRK-54"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-11-09T16:11:02.057-0500",
      "body": "Possibilities:\n\n* allow the user to generate an authorship token that they will keep track of in order to manage their story or stories. one token per 'author' (users might want to have more than one persona that they could have separate tokens for)\n* tokens should be cryptographically random and secure (i.e. non-predictable), and not exposed to the general user-base\n* show the user the stories that 'belong' to them\n* allow them to access an editing interface to adjust the story content, privacy, or other aspects of it\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-11-09T16:12:41.922-0500",
      "body": "If we decide to implement user account management, we should consider third-party authentication systems like Google, Facebook, OAuth, etc\n"
    }
  ]
}
---
Discuss, broadly, how we'll handle story authorship

We want people to be able to:

* Write their stories
* come back to them later and edit them
* make a story public
* make a story private

Will include discussions of a possible user account management system

* maintaining our own user management system
* allowing 3rd-party authentication schemes
* providing a token that the user can use in the future to go back and edit their story

Consider complexity and security

        