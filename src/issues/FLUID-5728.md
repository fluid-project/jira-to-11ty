---json
{
  "title": "FLUID-5728",
  "summary": "grid reorderer items shift out of place when the drop marker is rendered.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-07-29T12:38:38.578-0400",
  "updated": "2016-09-01T14:42:58.053-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Chrome, Safari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open the grid reorderer demo\
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/>

2\) Using the mouse, try to reorder items.\
Notice that items will drop down a row and leave a blank space.

This is not an issue for keyboard reordering which does not show a drop marker.

        