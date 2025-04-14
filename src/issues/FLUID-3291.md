---json
{
  "title": "FLUID-3291",
  "summary": "Safari crashes when using side arrows in vertical list reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jacob Farber",
  "date": "2009-10-14T11:56:37.000-0400",
  "updated": "2011-01-11T10:24:49.266-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Safari 4 Windows\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3288/",
      "key": "FLUID-3288"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-11T10:24:49.260-0500",
      "body": "Possibly fixed with the demo redesign and update for Infusion 1.3\n"
    }
  ]
}
---
Navigate to \
<http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/demo.html>

Use the arrow keys to get to the 4th list item\
Press Ctrl + left or right arrow\
Press Ctrl + up or down, Safari crashes

        