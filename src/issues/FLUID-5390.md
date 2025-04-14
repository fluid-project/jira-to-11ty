---json
{
  "title": "FLUID-5390",
  "summary": "no focus styling on save button when tabbing out of rich text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-06-03T10:43:21.353-0400",
  "updated": "2014-06-10T13:12:59.141-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-06-10T13:12:59.139-0400",
      "body": "Cannot reproduce.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the rich text inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/>

2\) Click the "edit" link on one of the rich text inline edit fields

3\) Make a change

4\) Tap the 'tab' key on the keyboard to move focus out of the rich text inline edit field to the save button.\
Notice that there is no focus styling on the save button, but hitting the 'enter' key will in fact save. Also, of you tab to the cancel button and shift-tab back, the focus styling does appear on the save button.

        