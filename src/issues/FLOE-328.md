---json
{
  "title": "FLOE-328",
  "summary": "Improve gpii.firstDiscovery.attachTooltip to re-calculate the tooltip model at model change instead of afterRender",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2015-05-08T10:27:17.070-0400",
  "updated": "2015-11-03T12:06:24.600-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-326/",
      "key": "FLOE-326"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-05-11T10:51:11.942-0400",
      "body": "The model change happens too early before the panel is rendered and results in tooltips being wiped out when the panel finishes rendering.\n"
    }
  ]
}
---
When using gpii.firstDiscovery.attachTooltip in renderer components such as preference panels, a grade component "gpii.firstDiscovery.attachTooltip.renderer" needs to be added as a grade for those components for the tooltip model "idToContent" to be re-calculated at "afterRender" event. However, listening to afterRender requires the panel to be re-rendered. We can move the re-calculation to model listeners to avoid the re-rendering.

        