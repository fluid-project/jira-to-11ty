---json
{
  "title": "FLUID-2485",
  "summary": "jQuery fade animation causes high CPU load and cursor flicker on IE6, bspace section info sample",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T15:51:58.000-0400",
  "updated": "2014-03-03T14:39:49.713-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6 Win2k\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T13:17:43.636-0500",
      "body": "May no longer be an issue.\\\n1\\. bspace example has been removed.\\\n2\\. the fade effect used by current tooltip in inline edit doesn't exhibit this problem in IE6.\n"
    }
  ]
}
---
The icon fade effect for creating and removing the undo/redo control on the bspace sample causes annoying flicker of the mouse cursor between the pointer and "busy" state as the fade animates. If this is not fixable, perhaps the fade could be eliminated on IE.

        