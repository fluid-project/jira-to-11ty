---json
{
  "title": "FLUID-3294",
  "summary": "Ui Options demo dialog is wider than the demo view and opens with the right side obscured",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "Laurel Williams",
  "date": "2009-10-14T13:36:25.000-0400",
  "updated": "2013-10-04T10:22:49.285-0400",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3294/screen_capture_ui_options.jpg",
      "filename": "screen_capture_ui_options.jpg"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-14T14:17:08.000-0400",
      "body": "In addition to the problem noted initially, if you increase the text size and text spacing sufficiently the YES radio buttons end up off screen left and cannot be accessed.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-14T14:19:27.000-0400",
      "body": "Added UI Options to the components impacted.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-11T12:00:23.026-0500",
      "body": "This appears to be resolved in 1.3 (tested in FF3 on MacOS and IE8 on Win). Heidi, would you mind having a look and if you concur, close the issue?\n"
    }
  ]
}
---
Open the UI options dialog in the demo portal by clicking Edit appearance using a smaller size monitor. The dialog left side is obscured and cannot be scrolled so that it can be viewed. See attached screen shot.

        