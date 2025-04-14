---json
{
  "title": "FLUID-3906",
  "summary": "Rich Text Inline Edit: Can't click on text to edit (only edit link)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-15T14:57:55.529-0500",
  "updated": "2010-12-15T15:01:28.480-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3.6 on Mac OS 10.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-15T15:01:28.473-0500",
      "body": "This is apparently by design now, so \"not a bug.\"\n"
    }
  ]
}
---
You're supposed to be able to click anywhere inside an inlineEdit field to switch to edit mode, but for the rich-text editor, this doesn't work - you **must** click right on the "Edit" link.

To reproduce:\
1\) Open the rich text demo:\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>\
2\) Click somewhere in the text box (but not on the "Edit" link)

The component should switch into edit mode, but doesn't.

        