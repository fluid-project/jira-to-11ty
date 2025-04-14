---json
{
  "title": "FLUID-142",
  "summary": "Dragging style not obvious with keyboard movements in IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2007-12-13T10:32:07.000-0500",
  "updated": "2007-12-18T14:24:10.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP, IE 6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Shaw-Han Liem",
      "date": "2007-12-18T10:58:05.000-0500",
      "body": "I couldn't recreate this on my virtual machine version of IE6. It looks like the thumbnail is getting the correct style (css filter) applied. Might need more background to hunt this one down.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-18T14:24:10.000-0500",
      "body": "Only seems to be a problem on dual loading IE6 / IE7 systems. Works fine on standalone IE6 and IE7.\n"
    }
  ]
}
---
When using keyboard drag and drop in IE 6, the dragging style is not obvious. It just turns from grey (selected state) to a just slightly lighter shade of grey in dragging state.

        