---json
{
  "title": "FLUID-2038",
  "summary": "Springboard:  When dragging object in grid out of browser to the left, object is dropped to the far right",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Daphne Ogle",
  "date": "2008-12-17T21:24:58.000-0500",
  "updated": "2008-12-18T08:50:10.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Mac OSX 10.5, Safari 3.1.2\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-148/",
      "key": "FLUID-148",
      "summary": "Edge case:  visual position of drop target when droppable is at beginning or end of a row."
    }
  ],
  "attachments": [],
  "comments": []
}
---
As I grab an object in the far right column and start moving it the left the drop target moves with me to the left as expected.  As soon as I drag out of the browser the drop target jumps to the far right.  It really should stay on the far left.  I made this minor since it's probably an edge case.

        