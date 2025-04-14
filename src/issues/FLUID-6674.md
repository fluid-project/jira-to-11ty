---json
{
  "title": "FLUID-6674",
  "summary": " Long unbroken text entered can cause the left side to be clipped offscreen",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-19T14:45:26.368-0400",
  "updated": "2021-07-19T14:52:39.413-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6674/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-19T14:48:09.584-0400",
      "body": "screenshot.png shows the left side clipped when long text are entered.\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [inline edit demo](https://build-infusion.fluidproject.org/demos/inlineedit/)
2. Add a large unbroken text to the inline edit field. Enter enough that when in view mode the screen is scrolled horizontally. 
3. Notice that the left side of the screen is clipped and cannot be scrolled into view.

        