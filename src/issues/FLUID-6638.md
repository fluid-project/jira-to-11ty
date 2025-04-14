---json
{
  "title": "FLUID-6638",
  "summary": "Large letter spacing causes text to clip and overlap",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-06-29T11:04:35.037-0400",
  "updated": "2021-06-29T11:27:57.229-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6638/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-29T11:05:27.921-0400",
      "body": "screenshot.png shows the clipped and overlapping text when letter spacing is at the maximum size.\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [prefs framework demo](https://build-infusion.fluidproject.org/demos/prefsframework/)
2. Open the prefs editor
3. Set the letter spacing to the largest value
4. Notice the clipping in the header and other overlapping text.

        