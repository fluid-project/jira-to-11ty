---json
{
  "title": "FLOE-432",
  "summary": "Polish up chart authoring tool demo in advance of OpenEd",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-05T13:40:29.469-0500",
  "updated": "2015-11-16T16:55:01.640-0500",
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
      "date": "2015-11-11T09:42:39.917-0500",
      "body": "A pull request is in for the visual design aspects: <https://github.com/fluid-project/chartAuthoring/pull/10>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-16T16:54:58.208-0500",
      "body": "The pull request has been merged into the master branch @ 4ffa37fe9cab9c0f2b8d268341554a1586e79f5e\n\nAlan will create a separate JIRA for the test coverage.\n"
    }
  ]
}
---
Catch-all for demo polishing tasks. Sub-tasks are in separate JIRAs.

**Visual design and functionality**

* display of percentages in pie slices and legend, along with / rather than raw values
* background circle when pie chart is "empty"
* editable title and description using existing inlineEdit component
* the demo should display a sample chart when first loaded
* there should be a reset button for the data entry in the demo

**Sonification**

* basic sound synthesis using this approach: <https://wiki.fluidproject.org/download/attachments/43778171/sonification%20density%20Dana%20zoomUnits.mp3?version=1&modificationDate=1446135012519&api=v2>
* reading labels/legends using our text-to-speech components
* basic sonification "zoom"

        