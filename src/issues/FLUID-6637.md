---json
{
  "title": "FLUID-6637",
  "summary": "OpenDyslexic font breaks layout of Prefs framework demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-06-29T10:56:55.856-0400",
  "updated": "2021-06-29T10:59:26.731-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6637/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-29T10:58:46.089-0400",
      "body": "screenshot.png shows the header text expanding beyond its borders when the Open Dyslexic font is used.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-29T10:59:26.731-0400",
      "body": "The current NOAA version of the Prefs Framework really needs to be replaced with something that uses best practices for styling.\n"
    }
  ]
}
---
The OpenDyslexic font causes the text in the header to wrap and extend beyond its borders. This cause the lower portion to be clipped behind the navigation.

Steps to reproduce:

1. Open the [Prefs Framework demo](https://build-infusion.fluidproject.org/demos/prefsframework/)
2. Open the prefs editor
3. Change the text style to "Open Dyslexic"
4. Notice the header text expanding beyond its borders

        