---json
{
  "title": "FLUID-6083",
  "summary": "Upgrade to Confluence 6.0.1 causes issue while editing page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Justin Obara",
  "date": "2016-11-21T11:13:21.291-0500",
  "updated": "2016-11-21T11:22:01.780-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Wiki"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-11-21T11:18:43.978-0500",
      "body": "Issue is being caused by the new \"Collaborative editing\" feature in Confluence 6.0.&#x20;\n\nI've turned it off (so Confluence continues to work in the old way, without collaborative editing) and it's working now.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-11-21T11:22:01.780-0500",
      "body": "Useful link - <https://answers.atlassian.com/questions/43907783/confluence-6.0.1-loading-the-editors-taking-longer-than-usual>\n"
    }
  ]
}
---
Error: "Loading the editor's taking longer than usual. Give it a few moments, then refresh your page if it still doesn't load. Speak to your Confluence admin if that doesn't fix it."

        