---json
{
  "title": "FLUID-5426",
  "summary": "Can't undo edits with VoiceOver",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-06-09T09:49:28.755-0400",
  "updated": "2016-11-08T13:38:03.756-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 7 (Mac OS 10.9)(VoiceOver)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-08T13:38:03.754-0500",
      "body": "Could not reproduce using VoiceOver with Safari 10 on macOS 10.12\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open an inlineEdit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/>\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/>

2\) make an edit in one of the inline edit fields and save the change

3\) Navigate to the undo control and activate it (ctrl-option-space or double tap on trackpad)\
Notice that it reads the control, but doesn't activate it.\
If you use the "space" or "enter" keys it reopens the inline edit field with the current text.

        