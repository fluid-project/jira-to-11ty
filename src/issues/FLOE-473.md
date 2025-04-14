---json
{
  "title": "FLOE-473",
  "summary": "Chart elements should be more composable",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-09-06T09:59:32.389-0400",
  "updated": "2018-05-23T10:42:32.203-0400",
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
Currently, charts are a single view component composed of multiple mix-in grades. This limits the composability, reusability and extensability of the grades.

The issue is discussed here: <https://github.com/fluid-project/chartAuthoring/pull/14#discussion_r67921147> - including comments for reference:

cindyli:

> "The component tree of floe.chartAuthoring.xAxis and floe.chartAuthoring.yAxis are quite similar. I wonder if a base grade can be extracted to be shared. The users of this base grade need to implement the actual drawAxis() and getAxisTickFormat()."

waharnum:

> At the moment, the barrier is that floe.chartAuthoring.xAxis and floe.chartAuthoring.yAxis are mix-in grades used in floe.chartAuthoring.lineChart.timeSeriesMultiDataSet rather than separate component grades (a legacy of when there was one big floe.chartAuthoring.lineChart component before separate drawn elements were split out into mix-ins). So implementing a base grade with drawAxis() and getAxisTickFormat() invokers in implementing grades would result in one overwriting another.
>
> The gradeNames block from floe.chartAuthoring.lineChart.timeSeriesMultiDataSet probably makes the issue clearer:
>
> gradeNames: \["floe.chartAuthoring.axis", "floe.chartAuthoring.xAxisTimeSeries", "floe.chartAuthoring.yAxis",  "floe.chartAuthoring.lineChart.timeSeries.line",  "floe.chartAuthoring.valueBinding", "floe.svgDrawingArea"]
>
> At the moment all of the chart elements need to be part of a single viewComponent (they all share the same SVG drawing area); they're split out into separate mix-in grades to isolate the various drawing functions, if that makes sense.
>
> That said, the component trees are indeed substantially similar; maybe longer-term we want a component-based approach where the drawing area is a view component, and drawn chart elements (axes, etc) are other (non-view) components that contain a reference to the drawing area. I can see this making the charts more composable from various grades without the namespace issues presented by the current mixin approach. If that makes sense I can make a separate JIRA for this issue?

        