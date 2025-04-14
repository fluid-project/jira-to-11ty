---json
{
  "title": "FLUID-2908",
  "summary": "id=\"content\" is used twice on this page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Laurel Williams",
  "date": "2009-06-03T14:35:21.000-0400",
  "updated": "2011-03-17T14:56:34.849-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The infusion page on the website contains a \<div id="content"> twice. We should alter the one that is within the page, since the other one is in the template.

        