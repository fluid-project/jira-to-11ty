---json
{
  "title": "VULAB-195",
  "summary": "Show Invited Users in list",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-04-21T14:15:58.000-0400",
  "updated": "2009-04-21T14:21:06.000-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-195/VULAB-195.patch",
      "filename": "VULAB-195.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-04-21T14:21:06.000-0400",
      "body": "I modified the condition to take out an invited user to work inside the function that returns the table of users to invite.\n\nIf a user has been invited then the checkbox is taken out. 2 html files are changed because there is the edit view and the view-only view for projects and inviting users.\n"
    }
  ]
}
---
So,

The current situation is when inviting users is that after they are invited they are taken off the list, this issue should fix it so that users are still shown in the list but disabled.

        