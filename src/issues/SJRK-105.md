---json
{
  "title": "SJRK-105",
  "summary": "Migrate theme loader code from server to UI project",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T14:54:07.502-0400",
  "updated": "2019-09-12T19:11:10.342-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-102/",
      "key": "SJRK-102",
      "summary": "The storyTelling-page component should load the necessary markup for its subcomponents"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-09-12T19:11:10.340-0400",
      "body": "The two repositories have been joined, and the current setup is not really relevant to this Jira. Currently, the custom theme is set in the server and then passed along to the client side via sjrk.storyTelling.loadThemedPage().\n"
    }
  ]
}
---
The server project currently contains some code which will dynamically load the appropriate JS and CSS files for a particular theme, as well as "instantiate" the correct component for said theme. This code should be moved to the UI project.

        