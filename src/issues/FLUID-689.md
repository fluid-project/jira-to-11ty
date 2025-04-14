---json
{
  "title": "FLUID-689",
  "summary": "File Uploader: total progress bar broken when uploading small files with a larger one.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-06-02T16:29:11.000-0400",
  "updated": "2008-07-08T14:43:53.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (Mac OS 10.5, WinXP)\\\nIE7 (WinXP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-689/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-06-02T16:30:16.000-0400",
      "body": "screenshot-1 shows the incorrect \"Total Progress\" bar\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-09T14:34:35.000-0400",
      "body": "Changed \\\nif (totalPercent) {\n\nto: \\\nif (totalPercent !== undefined) {\n\nso the total progress bar will update even if the total progress is 0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-08T14:43:53.000-0400",
      "body": "verified fix on FF2 (Mac OS X) and IE7 (winxp)\n"
    }
  ]
}
---
When uploading multiple small files( which display a size of 0 KB ) with a file greater than 10 KB, the total progress bar will show as 0% \[0 of 0 files]. When the larger file is reached, the total progress appears correctly.

dev-iteration35

        