---json
{
  "title": "FLUID-6050",
  "summary": "Need to manually switch to forms mode in NVDA to trigger undo/redo button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-08T15:44:11.507-0500",
  "updated": "2017-01-11T12:31:18.558-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Chrome 54 (Win 10, NVDA 2016.3)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Ensure that NVDA is enabled\
2\. Open the [Inline Edit demo](http://build.fluidproject.org/infusion/demos/inlineEdit/)\
3\. Edit the text in one of the inline edit fields\
4\. Navigate to the undo/redo button

Notice that pressing enter doesn't trigger the button, but if you switch into forms mode it will work.

        