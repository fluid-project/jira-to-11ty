---json
{
  "title": "FLUID-3287",
  "summary": "Layout and Grid Reorderer portal demos have no styling for when Ctrl key held down",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-13T17:21:57.000-0400",
  "updated": "2010-12-01T10:43:07.482-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-10-05T09:57:19.701-0400",
      "body": "Still an issue in v1.3 (tested Oct 5, 2010, FF3.6).\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-01T10:43:07.479-0500",
      "body": "No longer an issue in the Layout Reorderer. Grid Reorderer will fix this issue with the upcoming redesign.\n"
    }
  ]
}
---
The Reorderer applies a visual style to the current item while the Ctrl (or other meta key) is held down. This is not happening in the Layout Reorderer and Grid Reorderer portal demos. I believe class name is being applied, but there is no associated style in the CSS file.

        