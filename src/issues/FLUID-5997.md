---json
{
  "title": "FLUID-5997",
  "summary": "Page link contrast too low",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2016-10-26T16:02:50.629-0400",
  "updated": "2016-11-01T16:15:17.601-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6008/",
      "key": "FLUID-6008"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5997/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-26T16:04:08.687-0400",
      "body": "screenshot.png shows the light blue text on the grey background.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-10-28T14:02:11.648-0400",
      "body": "Fixing as part of <https://fluidproject.atlassian.net/browse/FLUID-6008#icft=FLUID-6008>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-01T16:15:17.598-0400",
      "body": "Addressed with work on <https://fluidproject.atlassian.net/browse/FLUID-6008#icft=FLUID-6008>\n"
    }
  ]
}
---
The [markup driven pager demo](http://build.fluidproject.org/infusion/examples/components/pager/markupDriven/) has light blue text for the page links on a grey background.&#x20;

From tota11y:\
"The color combination #0099cc/#eeeeee has a contrast ratio of 2.82, which is not sufficient. At this size, you will need a ratio of at least 3."

One option would be to change the page link text colour to #0093c5.

        