---json
{
  "title": "FLUID-4954",
  "summary": "UIO Fat panel buttons need to be adjusted in contrast themes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-03-28T06:52:11.314-0400",
  "updated": "2013-04-29T09:11:06.597-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-03-28T07:52:43.180-0400",
      "body": "This already appears to be implemented.\n"
    }
  ]
}
---
When changing to a contrast theme, the UIO panel interactables need to be tweaked a bit:

* The slider thumbs change size and shift to the top-left
* The toggle on-off button does not flatten (shading should disappear).
* etc.

        