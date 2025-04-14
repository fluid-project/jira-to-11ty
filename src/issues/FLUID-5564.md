---json
{
  "title": "FLUID-5564",
  "summary": "Table of Contents header not internationalizable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Anastasia Cheetham",
  "date": "2014-11-19T11:58:34.534-0500",
  "updated": "2014-11-20T13:47:34.969-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5567/",
      "key": "FLUID-5567"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-11-20T13:47:34.019-0500",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-5567#icft=FLUID-5567>\n"
    }
  ]
}
---
The heading for the Table of Contents is hard-coded into the HTML template, which means it is not internationalizable through a message bundle.

This issue was surfaces in the fluid-tech channel on Nov. 19, 2014 by ashgotti, who is developing a Drupal plugin for UIO

        