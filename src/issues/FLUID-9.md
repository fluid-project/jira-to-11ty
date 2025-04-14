---json
{
  "title": "FLUID-9",
  "summary": "Keyboard tooltip shows up in mouse interaction",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Shaw-Han Liem",
  "reporter": "Shaw-Han Liem",
  "date": "2007-06-27T11:23:35.000-0400",
  "updated": "2007-07-31T09:00:19.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XPSP2 Firefox 2.0.0.4\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-07-31T09:00:19.000-0400",
      "body": "The tooltip has been replaced with static text.\n"
    }
  ]
}
---
Right now there is only one version of the tooltip, which is the instructions for the keyboard interaction. It is showing up for the mouse events as well (i.e. mouseover and click). We should either remove the tooltip for the mouse interaction or create more suitable text with mouse instructions.

        