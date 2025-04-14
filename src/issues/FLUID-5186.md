---json
{
  "title": "FLUID-5186",
  "summary": "Rating system for keyboard a11y demo is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-10-21T15:30:05.396-0400",
  "updated": "2013-10-25T08:29:49.254-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5186/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-21T15:31:38.942-0400",
      "body": "\"Screenshot.png\" shows that the keyboard focus is on the third start but the rating is still at 1 star.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-24T14:24:47.395-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/422> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-25T08:29:45.681-0400",
      "body": "Pull request merged at 55a8379206922a6f283237e0d529d33d1746c597\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the 5-star keyboard a11y demo\
<http://build.fluidproject.org/infusion/demos/keyboard-a11y/html/keyboard.html>

2\) Using the keyboard attempt to change the star rating of any of the fruits.\
Notice that it doesn't change, but can be changed with the mouse.

        