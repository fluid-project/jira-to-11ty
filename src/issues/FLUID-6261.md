---json
{
  "title": "FLUID-6261",
  "summary": "The overview panel should be redesigned to better work with demos",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2018-03-12T13:10:09.377-0400",
  "updated": "2021-07-29T01:52:22.005-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6261/closed.png",
      "filename": "closed.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6261/description not visible.png",
      "filename": "description not visible.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6261/footer overflow.png",
      "filename": "footer overflow.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6261/opened.png",
      "filename": "opened.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-03-12T13:13:59.445-0400",
      "body": "\"closed.png\" shows the closed state.\n\n\"opened.png\" shows the opened state.\n\n\"description not visible.png\" shows when the window is small that the description can be mostly obscured.\n\n\"footer overflow\\.png\" shows the footer going offscreen when letter-spacing applied.\n"
    }
  ]
}
---
At the moment the overview panel sits at the left side of the window. When it is open it overlaps the content on the left side and spans the height of the screen. When it is closed it leaves a \* like symbol that hovers over the content in the top right corner. The overlapping of content is the primary issue, but there are also layout issues within the overview panel depending on the height of the window, the size of the descriptions, and footer information scrolling out of view if certain UIO adjustments are applied.

        