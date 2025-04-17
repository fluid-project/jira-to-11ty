---json
{
  "title": "FLUID-4359",
  "summary": "UIO Full preview slider and text are hard to read when certain color and contrast are chosen",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Harris Wong",
  "date": "2011-07-26T16:43:57.881-0400",
  "updated": "2013-04-11T16:51:24.441-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "FF 5\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4359/black-on-yellow.png",
      "filename": "black-on-yellow.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4359/white-on-black.png",
      "filename": "white-on-black.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4359/yellow-on-black.png",
      "filename": "yellow-on-black.png"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-07-26T16:47:50.382-0400",
      "body": "white-on-black.ong:\n\n* button text is white and is invisible, should be in black\n* header and paragraph are in dark gray, change that to white\n\nblack-on-yellow\\.png:\n\n* slider bar is white, which is extremely close to the yellow background colour.  Change it to black.\n\nyellow-on-black.png:\n\n* button text is yellow and is invisible, should be in black\n* header and paragraph are in dark gray, change that to white\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-26T16:49:04.824-0400",
      "body": "Bug Parade Infusion 1.4\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-25T11:33:04.917-0400",
      "body": "I think this is related to the work Justin is doing right now.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-02T11:11:32.000-0400",
      "body": "This seems to be fixed by pull request <https://github.com/fluid-project/infusion/pull/146> merged into project repo at e8af4dd1d5003291d5be73eb09014cc38cb794fb&#x20;\n"
    }
  ]
}
---
Steps to reproduce:\
1\. Go to webapp/demos/uiOptions/FullPreviewUIOptions/html/uiOptions.html\
2\. Pick "White on Black", "Black on Yellow", or "Yellow on Black" for "Colour & Contrast"\
3\. Save and apply\
4\. Notice some slider, text are extremely hard to read

        