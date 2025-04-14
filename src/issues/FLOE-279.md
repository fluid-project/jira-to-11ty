---json
{
  "title": "FLOE-279",
  "summary": "Style tooltip of the First Discovery tool to match the design",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-02-18T14:26:53.082-0500",
  "updated": "2015-11-12T14:46:27.602-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:46:27.599-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1369> and all activities should be carried on there.\n"
    }
  ]
}
---
Currently tooltips are not contextualized. When they are displayed, they do not display with an arrow pointing to the element "owning" the tooltip.

Part of the problem is the jQuery tooltip is being instantiated in a element unrelated to the elements requiring the tooltip.

Consider adding independent tooltips per hoverable element, or consider a new approach.

        