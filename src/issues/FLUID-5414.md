---json
{
  "title": "FLUID-5414",
  "summary": "The first time through the tab order, the first inline edit can't be opened with the keyboard when NVDA is on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T11:31:31.580-0400",
  "updated": "2014-06-06T15:05:33.797-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE 8 (Win XP) (NVDA 2014.2)\\\nChrome 35, IE 9, 10, 11 (Windows 7)(NVDA 2014.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-06T12:59:43.091-0400",
      "body": "Similar issue in IE 9 and 10 but you have to manually switch to focus mode for it work.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the simple inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/>

2\) Use the keyboard to place focus on the first Inline Edit field

3\) Press the "enter" key to open the inline edit field\
Notice that you get the invitation text, but you aren't able to get into edit mode. Cycling through the tab order and coming back to the field will work. Could have something to do with the mode that NVDA is in at the first pass through.

        