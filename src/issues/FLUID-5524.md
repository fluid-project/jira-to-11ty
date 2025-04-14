---json
{
  "title": "FLUID-5524",
  "summary": "The styling of the adjusters in full page versions of the preferences framework appear broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-10-09T14:24:20.697-0400",
  "updated": "2024-07-23T08:15:26.991-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5524/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-10-09T14:25:25.403-0400",
      "body": "screenshot.png shows the broken presentation of the adjusters in the full page prefs editor.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-11T14:29:15.042-0400",
      "body": "Updated the missing screenshot. The headers and their icons still don't line up, but the rest of the styling seems acceptable now. Perhaps there were some styling changes that fixed some of the other issues.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T08:15:26.991-0400",
      "body": "Could not reproduce with FF 128 and MS Edge 126 on macOS 14.5\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the full page manual test:\
<http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage-schema/>

Notice that the adjusters are all bunched up and that the headings don't align with their icons.

        