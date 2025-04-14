---json
{
  "title": "FLUID-5109",
  "summary": "Make pageEnhancer an auto-init component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-08-06T14:38:38.611-0400",
  "updated": "2013-08-15T10:42:07.227-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-08-15T10:41:44.657-0400",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-4907#icft=FLUID-4907>\n"
    }
  ]
}
---
In order to save the user options at calling pageEnhancer(), pageEnhancer is currently a manual init component. To comply with the latest framework, it would be nice to make it an auto-init component.

        