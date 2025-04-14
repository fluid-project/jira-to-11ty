---json
{
  "title": "SJRK-19",
  "summary": "Add a shared/public flag",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T15:39:50.638-0400",
  "updated": "2018-02-13T09:15:42.494-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2017-10-31T15:46:48.496-0400",
      "body": "There might even be a spectrum of shared - with a small group, with a particular person, with the world, with particular apps etc.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-11-09T15:53:06.700-0500",
      "body": "Gregor is in the process of adding a value to the story model. Some potential values for this field (currently called \"sharing\") are:\n\n* public\n* private\n* unlisted\n* anything else?\n\nThe \"private\" option would entail some sort of authorship and user account management, see <https://fluidproject.atlassian.net/browse/SJRK-20#icft=SJRK-20> for more on that\n"
    }
  ]
}
---
Add a flag to keep track of, edit and save whether a story has been shared publicly (whatever this entails)

        