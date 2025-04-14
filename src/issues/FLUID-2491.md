---json
{
  "title": "FLUID-2491",
  "summary": "Edit behavior broken after first edit and save",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "James Yoon",
  "date": "2009-04-02T16:24:24.000-0400",
  "updated": "2009-04-02T16:34:51.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Mac OS X 10.5.6, Firefox 3.0.8\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2437/",
      "key": "FLUID-2437",
      "summary": "Need to click twice on an editted field to open in edit mode: using FF"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2491/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2009-04-02T16:26:21.000-0400",
      "body": "Screenshot of attempting to edit after a first edit and save.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-04-02T16:34:14.000-0400",
      "body": "This is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-2437#icft=FLUID-2437>.\n"
    }
  ]
}
---
After executing a first edit and save, clicking to edit again does not open the edit field. Instead, a new line with a grey, rectangular box is inserted above the existing text. At this point, clicking on an empty area will revert back to the text without the new line or box. Alternatively, clicking on the text or box a second time will open the edit field.

This holds true for both mouse and keyboard access.

        