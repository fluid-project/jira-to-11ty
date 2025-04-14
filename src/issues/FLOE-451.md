---json
{
  "title": "FLOE-451",
  "summary": "Implement \"report for duty\" for dataEntry dynamicComponents",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2016-02-10T16:22:25.172-0500",
  "updated": "2016-02-10T16:23:39.259-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Per discussion at <https://github.com/fluid-project/chartAuthoring/pull/11#discussion_r52120230>, quoting @@Antranig Basman:

*— Whilst we can't explicitly iterate over dynamicComponents, we can have them "report for duty on creation" by broadcasting onCreate listeners to them via distributeOptions, which will allow us to build up the data structure above.*

The overall goal is to avoid some or all of the mixed Infusion / "raw" jQuery necessary in floe.chartAuthoring.updateDataEntryPanelFromDataSet to iterate through dynamicComponent DOM elements, as is necessary with the dataEntry elements.

        