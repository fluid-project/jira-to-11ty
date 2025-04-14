---json
{
  "title": "FLUID-15",
  "summary": "Tooltip text does not apply to mouse users",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2007-06-28T09:52:44.000-0400",
  "updated": "2007-06-28T09:56:53.000-0400",
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
      "author": "Jonathan Hung",
      "date": "2007-06-28T09:56:53.000-0400",
      "body": "Duplicate of Fluid-9\n"
    }
  ]
}
---
Currently the tooltip text displays instructions specific to keyboard users. When a mouse user sees a tooltip, this could be confusing since the tooltip does not apply to them.

Either display a different tooltip for mouse users, or get rid of tooltips and provide a different affordance / indicator for mouse users (i.e. changing the pointer to a hand cursor).

        