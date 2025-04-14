---json
{
  "title": "FLUID-1754",
  "summary": "Drop target always created regardless of cursor/avatar position",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-10-30T14:46:03.000-0400",
  "updated": "2008-10-30T15:44:27.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera, Safari 1.3 (OSX), FF3 (WinXP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T15:44:27.000-0400",
      "body": "This is a new design decision\n"
    }
  ]
}
---
If memory serves there were no drop zones visible if the cursor/avatar position was in an invalid spot. There is no invalid spot anymore - there always is a drop zone created based on the avatar position regardless if this represents a valid target.

Drag any image anywhere in the text page that is not a valid area. Drop zone are created. Same obtains if it is dragged out of the browser (to the left or top of the browser since with the scrolling there is no invalid right or bottom).

        