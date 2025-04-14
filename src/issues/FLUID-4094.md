---json
{
  "title": "FLUID-4094",
  "summary": "Grid Reorder grid has no borders",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "John Kremer",
  "date": "2011-02-18T15:48:56.755-0500",
  "updated": "2015-06-26T10:08:56.037-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win7, IE9\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3923/",
      "key": "FLUID-3923",
      "summary": "No focus styling in grid reorderer in IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:48:03.820-0400",
      "body": "Cannot reproduce with IE 11 (which is the latest supported version of IE). May have been fixed with demo updates.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:11.075-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
There are no borders around the letters in the grid.

<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/demo.html>

        