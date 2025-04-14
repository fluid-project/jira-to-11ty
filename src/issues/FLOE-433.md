---json
{
  "title": "FLOE-433",
  "summary": "Add ability to display percentages to pie & legend",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-06T15:14:05.853-0500",
  "updated": "2015-11-16T17:18:16.524-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-11-16T17:18:16.522-0500",
      "body": "Fixed with <https://fluidproject.atlassian.net/browse/FLOE-432#icft=FLOE-432> PR\n"
    }
  ]
}
---
The pie and legend components don't currently calculate or have the ability to display percentages of their values like the data entry elements do. They should have this ability - we can reuse the existing percentage functions easily enough to achieve this.

        