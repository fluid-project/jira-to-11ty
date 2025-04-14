---json
{
  "title": "FLUID-2474",
  "summary": "Layout Reorderer sample only allows text to be grab handle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T14:34:40.000-0400",
  "updated": "2014-06-25T16:02:36.778-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "IE6 (Win2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:02:36.772-0400",
      "body": "We are no longer actively supporting IE6. We will consider patches for certain issues.\n"
    }
  ]
}
---
In the LayoutReorderer sample at <http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/reorderer/html/LayoutReorderer.html> , in environments other than IE6 (Opera, FF) the entire white box representing the element is draggable. In IE6, only the text itself is recognised as the drag handle, with the appropriate hover cursor style.

        