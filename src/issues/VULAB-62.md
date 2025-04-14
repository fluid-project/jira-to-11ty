---json
{
  "title": "VULAB-62",
  "summary": "verify email being sent to new users, etc.",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-10-27T14:52:00.000-0400",
  "updated": "2014-03-04T09:03:52.281-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-10-27T14:54:07.000-0400",
      "body": "vulab5\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-30T14:59:32.000-0400",
      "body": "system was only emailing admin accounts. I integrated the $user->email function to send email and also added a 'type' that can passed as an option to auto-generate messages.\n"
    }
  ]
}
---
new user signups not sending out email, fix that.\
Check if user invitations are working and trace it back to the user class to see if anything works.

        