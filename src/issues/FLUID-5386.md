---json
{
  "title": "FLUID-5386",
  "summary": "Opening and Closing Rich Text inline edit brings up undo control",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2014-05-30T15:40:27.978-0400",
  "updated": "2016-11-15T09:10:58.969-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Firefox 29, Chrome 35, Safari 7 (Mac OS X 10.9.3)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3909/",
      "key": "FLUID-3909",
      "summary": "Rich Text Inline Edit - Pressing Cancel renders the Undo Edit link when no edits performed"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\) Open the rich text inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/>

2\) Click on the "edit" link

3\) Click cancel

Notice that the undo control is now present, as though a change has been saved.

        