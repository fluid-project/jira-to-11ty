---json
{
  "title": "FLUID-6748",
  "summary": "Prefs framework: stop saving panelIndex into store",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2022-07-29T15:46:45.966-0400",
  "updated": "2024-07-22T10:35:12.879-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-08-02T07:18:45.754-0400",
      "body": "Part of the reasoning to drop the panel index from the store is that the [new designs for UIO](https://www.figma.com/file/ADa4A8lMGuUmhNM1Kro2S7/UIO_2.0?node-id=724%3A5554) have a vertical presentation and will not include the panel index as is currently needed with the horizontal scrolling through all panels in mobile.\n"
    }
  ]
}
---
When using Personal Data Server as a store, a reset click in UI Options issues two save requests: the first one saves the reset panelIndex and the second one saves an empty preferences. The second save always fails likely due to a bug in RemoteModelComponent, which behaves wrongly in the case that there have been multiple local model updates in between successive calls to “write”.

To solve this problem, one save request should be issued for saving both rather than two request. The next version of infusion will handle the multiple successive calls.

To reduce the workload for fixing this in the current infusion, the solution is to stop saving panelIndex and only save preferences.

        