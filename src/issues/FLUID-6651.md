---json
{
  "title": "FLUID-6651",
  "summary": "Selection highlight disappears when playing selected text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-06T07:44:28.938-0400",
  "updated": "2021-07-06T08:10:26.666-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Safari 14 (iPad OS 14.6)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6651/screenshot.PNG",
      "filename": "screenshot.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-06T07:45:30.662-0400",
      "body": "screenshot.PNG shows the \"Play\" button for the selection reader, with the selection highlight no longer visible.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-07-06T07:46:24.661-0400",
      "body": "This is likely an issue with Safari on iPad OS\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [Orator demo](https://build-infusion.fluidproject.org/demos/orator/)
2. Using the touch screen, select some of the text content
3. Tap the play button
4. Notice that the selection disappears but you are able to self voice the text that was selected.

        