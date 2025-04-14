---json
{
  "title": "FLOE-503",
  "summary": "Bring in scale-based sonifications from Nexus sensors to sonify line charts",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-04-04T15:58:38.900-0400",
  "updated": "2020-03-04T18:19:11.175-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool",
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Part of the recent GPII work on the Nexus demos has involved creating sonifications for real-time sensor readings, along with visualizations using the chart authoring library. The GPII JIRA is at <https://issues.gpii.net/browse/GPII-2190> (sonification) / <https://issues.gpii.net/browse/GPII-2189> (visualization)

When time permits, we should see about bringing these scaling-based sonifications into the chart authoring for purposes of sonifying the line charts. Abstractly speaking, there is not a substantial difference between sonifying a streaming data set of values over time and sonifying a "historical" data set of values over time - both can be handled through Flocking's model-based synths.

Longer-term, our sonification work should form a separate library from both chart authoring and the Nexus demos that can be used as a dependency by both, and by any other code that has "convert some data into sound" as a need. This will obviously require some refactoring, but I'm leaving the note here as a reminder not to lose sight of this when starting this work.

        