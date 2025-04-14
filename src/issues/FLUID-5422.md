---json
{
  "title": "FLUID-5422",
  "summary": "undo/redo link do not work with NVDA unless manually changing to focus mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T15:01:05.747-0400",
  "updated": "2014-06-10T10:28:28.109-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Chrome 35 (Windows 7)(NVDA 2014.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open the rich text inline edit example\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/>\
<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/>

2\) Make a change in one of the inline edit fields

3\) navigate to the undo link and tap enter or space\
Notice that nothing happens. If you switch to focus mode (NVDA+space) it will now work.

        