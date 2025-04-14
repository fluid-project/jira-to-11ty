---json
{
  "title": "FLUID-4319",
  "summary": "Set background colour of Fat Panel tabs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-07-02T11:44:54.559-0400",
  "updated": "2013-10-04T10:01:00.256-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-07-04T11:18:38.977-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/95>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-07T16:06:46.952-0400",
      "body": "Pull request merged into project repo at 09562438ad760dff524d6313df1bffb0b8daac5f\n"
    }
  ]
}
---
If jq ui tabs are used elsewhere on the page, jquery sets a bg image. Over-ride this for fat panel.

        