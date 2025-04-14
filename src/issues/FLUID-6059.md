---json
{
  "title": "FLUID-6059",
  "summary": "Tooltip blocks edit button for Rich Text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2016-11-11T09:47:00.798-0500",
  "updated": "2024-07-23T13:20:31.240-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari (iOS 10.1.1)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6059/IMG_0003.PNG",
      "filename": "IMG_0003.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6059/IMG_0004.PNG",
      "filename": "IMG_0004.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-11T09:48:02.257-0500",
      "body": "IMG\\_0003.PNG shows the initial state, and IMG\\_0004.PNG shows the tooltip blocking the edit button. The tooltip appears the first time you tap the edit button, a second tap is needed to activate the button.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:20:31.240-0400",
      "body": "Could not reproduce with Safari 17.5 on macOS 14.5. A tooltip no longer appears.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the rich text inline edit manual test\
2\. Tap the edit button for any of the rich text inline edit fields

Notice that the tooltip covers the edit button and prevents it from being tapped to launch into edit mode.

        