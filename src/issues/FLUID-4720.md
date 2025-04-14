---json
{
  "title": "FLUID-4720",
  "summary": "Fix styling of the UIO panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Alexey Novak",
  "date": "2012-05-28T16:16:49.174-0400",
  "updated": "2013-10-04T09:19:38.156-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4720/Screen Shot 2012-05-28 at 4.15.14 PM.png",
      "filename": "Screen Shot 2012-05-28 at 4.15.14 PM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4720/Screen Shot 2012-05-28 at 4.15.38 PM.png",
      "filename": "Screen Shot 2012-05-28 at 4.15.38 PM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4720/Screen Shot 2012-05-28 at 4.15.56 PM.png",
      "filename": "Screen Shot 2012-05-28 at 4.15.56 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-04T09:19:38.144-0400",
      "body": "No longer have tabs in UIO\n"
    }
  ]
}
---
Fix the styling of the UIO panel.

* Tab buttons overlap between each other
* Selected tab button does not have a white selection background for the whole width of the tab
* Reset button positioned too high up
* You can see a scrollbar in UIO panel when you slide open it (especially visible in slow browsers)

        