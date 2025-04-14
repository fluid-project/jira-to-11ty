---json
{
  "title": "FLUID-16",
  "summary": "Tooltip display delay is too short",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2007-06-28T10:10:00.000-0400",
  "updated": "2007-07-31T08:58:57.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-07-31T08:58:57.000-0400",
      "body": "The tooltip has been replaced with static text.\n"
    }
  ]
}
---
Currently the tooltip appears instantly after the user has selected a new item in the Lightbox.

This is because Lightbox.js is invoking the tooltip using dijit.Tooltip.open() which does use a delay.

Instead we should be using an event to trigger the tooltip to execute Tooltip.\_onHover() or Tooltip.\_onMouseOver() to display the tooltip, and an event to close the tooltip (Tooltip.\_onMouseOut() and Tooltip.\_onUnHover).

        