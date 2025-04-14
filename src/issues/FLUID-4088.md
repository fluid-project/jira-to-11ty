---json
{
  "title": "FLUID-4088",
  "summary": "pencil and undo/redo icons not vertically aligned in IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2011-02-18T13:51:05.728-0500",
  "updated": "2011-10-17T13:05:14.837-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4088/inline-edit-icon-alignment-not-ok.png",
      "filename": "inline-edit-icon-alignment-not-ok.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4088/inline-edit-icon-alignment-ok.png",
      "filename": "inline-edit-icon-alignment-ok.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4088/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-18T13:52:58.175-0500",
      "body": "Screenshot shows the pencil and undo icons not properly aligned\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:26:30.813-0400",
      "body": "These new screenshots (inline-edit-icon-alignment-\\*.png) were taken of v1.4. They show that the alignment in the \"title\" of the demo seems to be ok, but the alignment of the caption is not.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:05:13.382-0400",
      "body": "This issue duplicated <https://fluidproject.atlassian.net/browse/FLUID-3913#icft=FLUID-3913>\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the inline edit demo

2\) Edit the inline editable text and save the change\
Notice that the pencil and the undo icon are not vertically aligned.

        