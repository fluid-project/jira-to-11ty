---json
{
  "title": "FLUID-3869",
  "summary": "Layout reorderer demo: default focus style being applied after keyboard move, even if CTRL is pressed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "heidi valles",
  "reporter": "Jonathan Hung",
  "date": "2010-12-01T10:48:26.632-0500",
  "updated": "2010-12-03T10:07:42.100-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-01T18:00:51.740-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-03T10:07:42.096-0500",
      "body": "Could not reproduce this problem on two other systems (Mac and Windows). Closing.\n"
    }
  ]
}
---
In the Layout Reorderer demo, after the user has moved a portlet, the selected portlet's style reverts back to the default focused style, even if the user still has CTRL depressed. If CTRL is depressed on a movable item, it should always appear in a "being moved" state (i.e. indented slightly to the right).

        