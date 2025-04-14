---json
{
  "title": "SNOW-5",
  "summary": "Integrate UIO into the site and ensure it works with the snow theme",
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
  "date": "2017-12-08T10:49:15.961-0500",
  "updated": "2018-05-15T10:36:17.089-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-07T09:02:49.975-0500",
      "body": "Added B\\&W, B\\&Y, grey assets of banner and logo.\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-14T12:26:13.316-0500",
      "body": "Table of Contents class \".flc-toc-tocContainer\" added to front page, category, pages and posts.\n\nLine-height override of Foundation needed to work with UIO:\n\n```java\n/* Overriding Foundation to work with UIO */\r\nlabel, p {\r\n  line-height: inherit;\r\n}\n```\n"
    }
  ]
}
---
Checklist for UIO integration:

* Table of Contents - make sure it does not disrupt the flow of the rest of the website
* Contrast themes - background images, logos, and text are readable in different contrast themes
* Changing text size, style, line-height does not break the layout

        