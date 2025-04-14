---json
{
  "title": "FLUID-757",
  "summary": "Create pattern editor role for OSDPL & adjust permissions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-06-10T16:45:28.000-0400",
  "updated": "2008-06-23T16:59:54.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T16:45:40.000-0400",
      "body": "iteration11\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-06-12T15:49:25.000-0400",
      "body": "Created the Pattern Editor role for users and changed the Authenticated User role. For a summary of the current access permissions, see this link:\\\n<http://osdpl.fluidproject.org/admin/user/access> (must be an administrator to view / edit).\n\nFor the Authenticated User:\n\n* reduced access to modules / features not required.\n* can create and edit own Design Patterns, forum posts, comments, images, and user profile.\n* can't edit anyone else's content.\n\nFor Pattern Edtior:\n\n* can't edit any other user's content except Design Patterns and images\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-21T02:04:01.000-0400",
      "body": "Since we've now reduced the permissions for any user who is not an administrator, we want to give pattern editor permissions to anyone who is on the Fluid UX team. I just did this to finish up this task.\n"
    }
  ]
}
---
Currently we are just approving everyone who requests an account automatically, and anyone with an account can edit patterns, which is not safe. Let's create a "pattern\_editor" role and give that only to select people with accounts on the site that we know (e.g. the Fluid UX team) whose identity we can verify by looking at the email address. For now, we probably want anyone with an account to be able to submit patterns and edit their own patterns. Check out the other permissions as well to make sure we aren't giving authenticated users (whose identity we aren't verifying) too many permissions.&#x20;

        