---json
{
  "title": "FLUID-4482",
  "summary": "Uploader server: Error msgs reset when new erroneous files added to queue but not # errors",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2011-09-30T14:41:34.333-0400",
  "updated": "2015-06-10T10:26:08.798-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4482/Screen shot 2011-09-30 at 2.35.48 PM.png",
      "filename": "Screen shot 2011-09-30 at 2.35.48 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:26:08.797-0400",
      "body": "the uploader server demo no longer exists.\n"
    }
  ]
}
---
Go to image gallery, add a bunch of files (some not images). You will get error messages for the non-image files. Add some more files to the queue that aren't images - you will get error msgs for these new files, replacing the old error messages. But the # errors stays the same in the status message. Confusing if you want to view all of the errors, but only see the most recent.

        