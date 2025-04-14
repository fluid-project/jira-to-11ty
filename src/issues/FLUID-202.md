---json
{
  "title": "FLUID-202",
  "summary": "Fix left-right navigation and moving of portlets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2008-02-04T17:22:26.000-0500",
  "updated": "2011-02-22T16:27:55.314-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:55.312-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Horizontal navigation and reordering of portlets is accomplished by navigating/moving to the top of the left or right column as appropriate.  And, reoderering movement is subject to permissions; for example, if the portlet cannot be moved to the top of the neightbouring column, then it is moved to the first permissible location down the column.

        