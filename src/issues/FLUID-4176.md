---json
{
  "title": "FLUID-4176",
  "summary": "Button styles not right",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2011-04-04T17:27:58.343-0400",
  "updated": "2014-04-02T16:30:56.988-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4175/",
      "key": "FLUID-4175",
      "summary": "Button unit tests have bad path to images"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4176/bad-button-styles.png",
      "filename": "bad-button-styles.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4176/bad-button-styles.tiff",
      "filename": "bad-button-styles.tiff"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-04-04T17:28:56.727-0400",
      "body": "This file (bad-button-styles.tiff) shows how the buttons look.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T15:54:57.711-0400",
      "body": "Here's a PNG version of the screen shot.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:30:56.986-0400",
      "body": "We're deprecating FSS.\n"
    }
  ]
}
---
The unit test page for the FSS containers includes tests for the button styles:\
<http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/3.fss.layout.advanced.html>\
(until FLUID-4175 is fixed, you'll need to manually fix the paths to the images folder inside the HTML file).

The buttons do not look right (see attached screenshot, bad-button-styles.tiff).

        