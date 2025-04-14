---json
{
  "title": "FLUID-5413",
  "summary": "redo link not announced by screen reader, immediately after undoing a change",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T11:23:36.294-0400",
  "updated": "2014-06-06T15:22:49.256-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE 8 (Win XP) (NVDA 2014.2)\\\nChrome 35, FF 29, IE 9, 10, 11 (Windows 7)(NVDA 2014.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open the inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/>

2\) Make a change to one of the inline edit fields

3\) Save the change

4\) Use the undo button\
Notice that focus is now on a redo button, but it wasn't announced by the screen reader.

        