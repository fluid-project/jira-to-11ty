---json
{
  "title": "FLUID-3616",
  "summary": "Inconsistent keyboard focus after selecting an option in inline edit dropdown",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2010-04-08T10:32:15.000-0400",
  "updated": "2014-07-14T10:21:53.371-0400",
  "versions": [
    "1.2beta1",
    "1.2",
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Chrome 4 (Win XP, Win 7)\\\nIE 8 (Win XP, Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:13:16.271-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-14T10:21:53.369-0400",
      "body": "The interaction is now consistent across supported browsers Chrome 35, FF 30, Safari 7 and IE 11. After pressing enter the selection is saved and focus is lost.\n"
    }
  ]
}
---
After selecting an item under a dropdown inline edit using the keyboard, focus is lost in Chrome 4 (XP) and IE 8 (XP), but not FF 3.6 (XP)

To reproduce:

1\. Load <http://build.fluidproject.org/infusion/tests/manual-tests/html/dropdown.html>\
2\. Tab focus the editable field.\
3\. Press Enter to activate.\
4\. Keyboard select an item by pressing Enter.\
5\. Upon pressing enter, notice there is no focus. Pressing Tab will put focus back on to inline editable field.

        