---json
{
  "title": "FLUID-5310",
  "summary": "Safari - when minimizing the overviewPanel it visually disappears but remains clickable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-04-17T10:19:42.307-0400",
  "updated": "2014-04-23T13:00:59.874-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-04-17T12:06:23.655-0400",
      "body": "The pull request has been merged into the project master @ e511c9fc7eff7c57d3f8071e4be2664d89188f5c\n"
    }
  ]
}
---
In Safari, if you minimize the overviewPanel, it appears to disappear completely from the screen. But hovering over the top-left corner indicates that the component is still there and clicking will maximize the overviewPanel.

This appears to be a problem with the width of the hidden class being set to zero. Setting the dimensions makes the panel render properly.

        