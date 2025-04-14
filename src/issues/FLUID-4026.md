---json
{
  "title": "FLUID-4026",
  "summary": "Drop-down Inline Edit: Selected and hover/focus styling too similar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2011-01-07T16:17:54.803-0500",
  "updated": "2016-07-08T10:17:12.786-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4026/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T16:18:23.775-0500",
      "body": "Same image being used from <https://fluidproject.atlassian.net/browse/FLUID-3246#icft=FLUID-3246>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:17:09.261-0400",
      "body": "Replaced the missing screenshot (<https://fluidproject.atlassian.net/browse/FLUID-3246#icft=FLUID-3246>.png) with a new one (screenshot.png) that shows the same styling for hover and keyboard focus.\n"
    }
  ]
}
---
The mouse hover / keyboard focus styling for list item is too similar to the styling used to indicate the current drop-down selection.

Based on comment from Jen Bourey:

"I also found the fact that the "selected" value sort of visually looks selected but the arrow keys scroll down from the first item to be confusing."

        