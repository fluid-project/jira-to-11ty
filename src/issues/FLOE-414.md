---json
{
  "title": "FLOE-414",
  "summary": "Make the pie SVG scalable",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Cindy Li",
  "date": "2015-08-21T15:26:06.992-0400",
  "updated": "2015-10-20T11:03:01.980-0400",
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
      "date": "2015-09-14T10:16:58.482-0400",
      "body": "A few observations from recent experimentation:\n\n* it's pretty straightforward to have the SVG scale to the proportions of the container DIV using jQuery to figure out the container height + width when creating it. One approach to this is in the branch at <https://github.com/waharnum/chartAuthoring/tree/FLOE-414>&#x20;\n\n- per the spec, you can specify SVG width + height in em or rem, though I'm not sure there's consistent behaviour cross-browser on this. This seems to work OK in Chrome and behave strangely in Firefox.\n\n* the viewBox attribute can do all kinds of magic - basically, it lets you specify a proportional-coordinate system and behaviour for any drawing within the SVG. So you can specify the SVG's size in relation to the viewBox height and width, rather than any external measurements. This helps a lot in auto-scaling to container size.\n\n- If we'd like the pie charts to scale based on UIO font scaling, one approach would be to set their parent container height in em and use one of the autoscaling approaches. We might need to have them redraw based on a listener.\n"
    }
  ]
}
---
The size of the created pie is based on the width and height given to the SVG. These values only accept px instead of em or rem. This causes the issue that the created pie would not work with UIO since it's not scalable based on the font size change.

A might-be-helpful reference: <http://eyeseast.github.io/visible-data/2013/08/28/responsive-charts-with-d3/>. It shows how to redraw the chart at the window size change, but this solution would not be helpful for the font size change.

Another reference for scalable SVG: <https://css-tricks.com/scale-svg/>

        