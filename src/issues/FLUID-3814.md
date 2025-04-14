---json
{
  "title": "FLUID-3814",
  "summary": "Text being read back by NVDA in Simple Inline Edit Demo may not be user friendly in Firefox 3.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Jonathan Hung",
  "date": "2010-10-18T15:51:15.632-0400",
  "updated": "2011-01-11T10:23:48.696-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Windows 7, FF3.6, NVDA 2010.1\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3815/",
      "key": "FLUID-3815"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T10:23:48.694-0500",
      "body": "Issues to be captured in more specific Jiras.\n"
    }
  ]
}
---
In the Simple Inline Edit demo, the text being read back by may not be usable or useful to an NVDA 2010.1 user. Verbage should be condensed if possible.

Results typed as it sounds...

FF3.6 - Initial Load:\
/start\
Inline Edit Demo\
Title and captions are editable by clicking on them, or by selecting the text with the keyboard and pressing Enter. \
Clickable "Untitled" button clickable edit text untitled.\
Graphic shiny red car, caption.\
Clickable "A red vintage car" button clickable edit text "A red vintage car".\
/end

FF3.6 - Keyboard focus:\
/start\
Clickable edit text "untitled" button clickable.\
Clickable edit text "A red vintage car" button clickable.\
/end

FF3.6 - Edit mode keyboard:\
/start\
Press Escape to cancel, Enter or tab to save. Untitled.\
/end

FF3.6 - undo / redo:\
/start\
Undo edit button undo edit link.\
Redo edit button redo edit link.\
/end

        