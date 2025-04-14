---json
{
  "title": "FLUID-5438",
  "summary": "The Exploration Tool's Speak feature doesn't read the actual page contents in Chrome or Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "Colin Clark",
  "date": "2014-06-10T10:56:39.144-0400",
  "updated": "2016-03-03T10:32:13.500-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Latest Chrome and Safari\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5405/",
      "key": "FLUID-5405"
    }
  ],
  "attachments": [],
  "comments": []
}
---
If you try the demo of the Exploration tool at <http://build.fluidproject.org/prefsEditors/demos/explorationTool/> in Chrome or Safari, you'll notice that it reads the contents of the overlay panel without difficulty. However if you follow these steps, the page contents won't be read:

1\. Closing the overlay panel\
2\. Enabling “Speak"

In both browsers, I hear "Text to Speech Enabled" and then silence.

        