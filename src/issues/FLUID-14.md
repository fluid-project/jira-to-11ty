---json
{
  "title": "FLUID-14",
  "summary": "Tooltip improperly positioned if near edge of browser window",
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
  "reporter": "Jonathan Hung",
  "date": "2007-06-28T09:48:18.000-0400",
  "updated": "2007-10-22T15:54:21.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-06-29T06:51:36.000-0400",
      "body": "This issue appears to be fixed with the latest snapshot of Dojo and Dijit. However this means changes to the Lightbox CSS file.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-08-24T07:54:58.000-0400",
      "body": "The tooltip has been removed from the mark-up.\n"
    }
  ]
}
---
When displaying a tooltip and the tooltip is near the edge of the browser window, the tooltip would be improperly positioned.

This is a Dijit bug. See: <http://trac.dojotoolkit.org/ticket/2759>

        