---json
{
  "title": "FLUID-4498",
  "summary": "Background colour with some fonts cause overlap in showcase demo instructions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-03T15:58:11.271-0400",
  "updated": "2011-10-17T10:28:43.263-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4519/",
      "key": "FLUID-4519"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4498/uio-background-overlapping-line-above.png",
      "filename": "uio-background-overlapping-line-above.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T16:00:19.211-0400",
      "body": "This screenshot (uio-background-overlapping-line-above.png) shows the \"overlapping\" effect. This only happens when a theme that specifies a background colour is in use, and only with a couple of fonts (Comic Sans being the most pronounced).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T10:28:43.251-0400",
      "body": "This has been duplicated by <https://fluidproject.atlassian.net/browse/FLUID-4519#icft=FLUID-4519>\n"
    }
  ]
}
---
When Comic Sans or Verdana is selected and one of the high-contrast themes is selected, the instruction text of the showcase demo "overlaps" the line above. I suspect this might have to do with something funky with the line spacing for the instructions - this doesn't happen in the body of the document.

        