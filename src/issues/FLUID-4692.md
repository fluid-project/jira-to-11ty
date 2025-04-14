---json
{
  "title": "FLUID-4692",
  "summary": "Faulty sentinelization in Layout Reorderer causes failure in layouts with multiple rows \"against the grain\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-04-08T23:02:58.369-0400",
  "updated": "2014-03-03T12:55:44.953-0500",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-05-03T06:31:04.701-0400",
      "body": "Merged into project repo at 4ae57474202ef1020efad64709079659974d7122\n"
    }
  ]
}
---
The "sentinelization" algorithm introduced to resolve FLUID-1589 does not deal with complex cases correctly. It makes the assumption that there is simple structure in the DOM layout perpendicular to the "dominant direction". For example, in the vertical orientation of the layout reorderer, if there are multiple sets of modules with the same horizontal coordinates, the "sentinel zones" for the cells within the modules at the extremes of the zones will overlap, causing many of them not to be findable either when dragging with the mouse or keyboard. This issue was probably noticed a while ago, but in that case it was triggered by a separate bug involving the orientation of the layout being set incorrectly. Now a user has selected one of these complex layouts, the failure is observable in normal operation.

The sentinelization algorithm needs to be fixed to cull sentinel zones which intersect other cells.

        