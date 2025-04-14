---json
{
  "title": "FLUID-1417",
  "summary": "OSDPL: Update user profile privileges",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-09-03T10:49:04.000-0400",
  "updated": "2008-10-01T09:38:15.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-09-03T10:49:19.000-0400",
      "body": "Iteration18\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-09-11T16:07:17.000-0400",
      "body": "Blake, can you look over the permissions to make sure it's sane?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-09-30T10:41:36.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-01T09:38:15.000-0400",
      "body": "Done and done.\n"
    }
  ]
}
---
Revise user profiles for access privileges:

**User profiles:** (high)

*
  * Unregistered user (Content consumer)
    * can view public content on the site including announcements, design patterns, and comments
    * can comment on other people's patterns (proper spam deterrent/filtering should be in place)
    * can not create content design patterns

-
  * Registered user (Content author)
    * The basic user account allowing a person to create design patterns, rank users and content.
    * anyone can become a registered user and begin writing patterns

*
  * Reviewer (Content editor and moderator)
    * Someone who has demonstrated an understanding of design patterns and can help edit and polish draft patterns.
    * A reviewer can also moderate comments and facilitate discussion.

-
  * Patterns Administrator (Content Administrator)
    * responsible for administering content, pattern users, and keeping an eye on activity
    * can create, edit, and delete design patterns, comments, announcements, users

*
  * Site Administrator (Technical Administrator)
    * Same as the patterns administrator, but with full site access.
    * responsible for the operation of the OSDPL site
    * updating modules, data backup, security, etc.

        