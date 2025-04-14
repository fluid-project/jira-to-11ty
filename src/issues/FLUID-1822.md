---json
{
  "title": "FLUID-1822",
  "summary": "Image Reorderer does not provide context for screen reader user (Accessibility)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michael Elledge",
  "date": "2008-11-18T15:04:35.000-0500",
  "updated": "2011-01-10T15:39:33.390-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Image Reorderer",
    "Keyboard Accessibility"
  ],
  "environment": "Firefox 3 and JAWS 9\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-492/",
      "key": "FLUID-492",
      "summary": "JAWS difficulty exiting Virtual PC Cursor to navigate in Lightbox"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2964/",
      "key": "FLUID-2964",
      "summary": "Research a11y best practices for re-orderer"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T13:59:18.000-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-06T16:18:17.000-0500",
      "body": "In JAWS it announces the images that have moved, in NVDA it doesn't say anything.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T15:39:33.388-0500",
      "body": "Sub-issues were fixed for Infusion 1.3\n"
    }
  ]
}
---
Image Reorder does not tell user when image has focus, is being moved, or its finallocation. Recommend that screen reader announce the following:

When control pressed: "Dragonfruit has focus. Use arrow keys to move."\
Each time arrow key pressed: "Dragonfruit moves right/left/up/down."\
When user presses control + alt + Num 5: "7 column by 2 row display. Dragonfruit in top row, third from left."

        