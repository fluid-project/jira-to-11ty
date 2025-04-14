---json
{
  "title": "SNOW-7",
  "summary": "CSS refactoring",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eloisa Guerrero",
  "reporter": "Eloisa Guerrero",
  "date": "2018-01-29T13:56:13.357-0500",
  "updated": "2018-05-15T10:36:11.124-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-06T10:51:56.648-0500",
      "body": "Also make sure indentations are 4 spaces (not tabs)\n"
    }
  ]
}
---
CSS refactoring in style.styl:

* Define and use colour variables based on SNOW colour palette
* Remove any unused classes from a11y theme
* Comment in any unlabeled sections
* Make sure the UIO-specific classes work with the new responsive UIO

        