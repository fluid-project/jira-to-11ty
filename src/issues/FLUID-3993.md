---json
{
  "title": "FLUID-3993",
  "summary": "Tiny MCE keyboard trap in Win XP/Chrome",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "heidi valles",
  "date": "2010-12-21T13:07:35.656-0500",
  "updated": "2011-01-11T11:23:14.067-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win XP, Chrome\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T11:23:14.062-0500",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-3606#icft=FLUID-3606>\n"
    }
  ]
}
---
Open the Tiny MCE editor in the rich text inline edit example - tab into the editor and attempt to tab out. Once I'm in, my tab creates actual tabs in the editor instead of going to the save/cancel buttons.

Not sure if this is a tiny/chrome bug or something with our implementation.

        