---json
{
  "title": "FLUID-3815",
  "summary": "Text being read back by NVDA in Simple Inline Edit Demo may not be user friendly in IE8",
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
  "date": "2010-10-18T16:14:57.913-0400",
  "updated": "2011-01-11T10:24:07.639-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Windows 7, IE8, NVDA 2010.1\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3812/",
      "key": "FLUID-3812",
      "summary": "NVDA reading \"blank\" out loud after editing a field in IE8"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3813/",
      "key": "FLUID-3813",
      "summary": "NVDA reads out document filename twice before reading edited text in IE8"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3814/",
      "key": "FLUID-3814",
      "summary": "Text being read back by NVDA in Simple Inline Edit Demo may not be user friendly in Firefox 3.6"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T10:24:07.637-0500",
      "body": "Issues to be captured in more specific Jiras.\n"
    }
  ]
}
---
The text read back by NVDA may not be usable / friendly to an NVDA 2010.1 user.

Here is what NVDA reads back to the user:

Initial Load:\
/start\
"Inline Edit Demo\
Title and captions are editable by clicking on them, or by selecting the text with the keyboard and pressing Enter. \
Edit "Untitled" button graphic edit text "Untitled" graphic shiny red car.\
Caption.\
Edit "A red vintage car" button graphic edit text "A red vintage car".\
/end

Keyboard focus:\
/start\
Edit "Untitled" graphic button.\
Edit "A red vintage car" graphic button.\
/end

Keyboard edit: Start edit. after pressing Enter\
/start\
"Edit untitled"\
/end

Keyboard edit: End edit. Pressed Enter (This is FLUID-3813 and FLUID3812).\
/start\
"Inline Edit document.\
Inline Edit document.\
\<new edit text> edit blank." \
/end

        