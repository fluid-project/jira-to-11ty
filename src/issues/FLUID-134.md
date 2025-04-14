---json
{
  "title": "FLUID-134",
  "summary": "Cannot nest Reorderers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2007-11-30T13:45:30.000-0500",
  "updated": "2008-04-28T15:26:56.000-0400",
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
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-136/",
      "key": "FLUID-136",
      "summary": "Event handling in nested reorderers is incorrect."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-01-07T16:50:17.000-0500",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-136#icft=FLUID-136>\n"
    }
  ]
}
---
Nesting a Reorderer in side a Reorderer does not work propertly.

A use case for this might be nested list items, or portlet organization (orderable portlets inside orderable columns), or orderable divs inside orderable table cells.

        