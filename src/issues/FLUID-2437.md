---json
{
  "title": "FLUID-2437",
  "summary": "Need to click twice on an editted field to open in edit mode: using FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-01T11:16:47.000-0400",
  "updated": "2009-06-03T14:00:43.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3 (Win Vista, Win XP, Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2453/",
      "key": "FLUID-2453"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2491/",
      "key": "FLUID-2491"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2009-04-02T16:34:59.000-0400",
      "body": "After executing a first edit and save, clicking to edit again does not open the edit field. Instead, a new line with a grey, rectangular box is inserted above the existing text. At this point, clicking on an empty area will revert back to the text without the new line or box. Alternatively, clicking on the text or box a second time will open the edit field.\n\nThis holds true for both mouse and keyboard access.\n\nHolds true for FF3 in OS X 10.5 too.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-03T14:00:43.000-0400",
      "body": "Appears to have been fixed, possibly in the move from a manual to test to a quick start example\n\nTested using:\n\nFF3 (Mac OS 10.5)\n"
    }
  ]
}
---
Need to click twice on an editted field to open in edit mode

1\) Open the rich text inline editor example\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/rich-text-inline-edit.html>

2\) Edit the any of the rich text inline edit fields and save

3\) Using the mouse, click on the inline edit field

Notice that it doesn't immediately open, but just has an empty text field focused. Clicking on this or the inline edit field again, will bring it up into edit mode.

        