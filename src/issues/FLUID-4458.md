---json
{
  "title": "FLUID-4458",
  "summary": "Drop markers should not appear above and below empty space in List Reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2011-09-19T15:55:05.460-0400",
  "updated": "2016-07-08T11:05:16.542-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-07-08T11:04:23.687-0400",
      "body": "Removed missing screenshots. I was unable to take a screenshot of the issue to replace to missing uploads.\n"
    }
  ]
}
---
When dragging an item, an empty space is created in the item's original position. Dragging the item back over the original position draws a drop marker above or below this empty space.

This interaction is confusing since dropping above or below this empty space produces the same result, and conceptually there's no "above" or "below" to an empty space.

Recommendation: When dragging an item back over it's original position, draw only a single marker regardless.

<http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/>

        