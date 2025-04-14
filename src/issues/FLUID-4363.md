---json
{
  "title": "FLUID-4363",
  "summary": "\"Comic Sans\" and \"Verdana\" affect the layout of headers and labels",
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
  "date": "2011-07-28T09:13:42.061-0400",
  "updated": "2011-09-26T12:53:12.130-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4362/",
      "key": "FLUID-4362",
      "summary": "Inputs/Icons don't line up with their labels when text size is increased"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4363/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T09:15:16.002-0400",
      "body": "ScreenShot.png shows the \"Show Table of Contents\" label being wrapped and the header misaligned with the icon\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T09:19:07.633-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "y z",
      "date": "2011-09-06T16:49:15.699-0400",
      "body": "This seems to be resolved as I can't reproduce it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-26T12:53:12.128-0400",
      "body": "This may have been resolved with the move to the new demo\n"
    }
  ]
}
---
"Comic Sans" and "Verdana" cause the "Show Table of Contents" label to wrap and push the headers too low.

Steps to reproduce

1\) Open the Full w/ preview UIO demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html>

2\) Change the Text Style to either "Comic Sans" or "Verdana".\
Notice that the "Show Table of Contents" label wraps and the headers are misaligned with their icons.

        