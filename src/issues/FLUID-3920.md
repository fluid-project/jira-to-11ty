---json
{
  "title": "FLUID-3920",
  "summary": "Demo: The layout of the items extend beyond the screen instead of resizing to fit: using IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-12-16T13:03:37.897-0500",
  "updated": "2014-07-30T15:51:14.887-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3920/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-16T13:17:50.480-0500",
      "body": "\"screenshot-1\" shows how the content doesn't resize to fit the page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-30T15:51:14.886-0400",
      "body": "IE 6 is no longer a supported browser.\n"
    }
  ]
}
---
The layout of the thumbnails isn't  fluid in IE 6, so it cause a horizontal scroll.

Steps to reproduce

1\) Open the keyboard a11y demo\
<http://build.fluidproject.org/infusion/demos/keyboard-a11y/html/keyboard.html>

Notice the horizontal scroll bar, because the contents don't resize to fit within the window.

        