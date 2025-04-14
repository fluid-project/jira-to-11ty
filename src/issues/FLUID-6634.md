---json
{
  "title": "FLUID-6634",
  "summary": "The input fields in the UI Options demo do not respond to text size changes.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-06-28T13:36:18.710-0400",
  "updated": "2021-06-28T13:39:57.053-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6634/text-size-decreased.png",
      "filename": "text-size-decreased.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6634/text-size-increased.png",
      "filename": "text-size-increased.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-28T13:39:57.053-0400",
      "body": "text-size-decreased.png and text-size-increased.png show that the textfield and textarea are not responding to the text size changes.\n"
    }
  ]
}
---
Steps to reproduce:

1. [Open the UI Options demo](https://build-infusion.fluidproject.org/demos/uioptions/)
2. Open the prefs editor
3. Change the Text Size
4. Enter text in any of the input fields in the demo page
5. Notice that the inputs (textfield and textarea) do not respond to text size changes

        