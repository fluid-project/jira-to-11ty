---json
{
  "title": "FLUID-3434",
  "summary": "Cursor remains an arrow when hovered over actionable items (e.g. Download button)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Erin Yu",
  "date": "2009-12-16T13:54:42.000-0500",
  "updated": "2013-04-11T17:43:18.205-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3434/FLUID-3434-1.patch.txt",
      "filename": "FLUID-3434-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-17T12:47:44.000-0500",
      "body": "I just checked this in IE6 - the cursor does change to a hand for hovers over actionable items.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-02-01T13:28:40.000-0500",
      "body": "Am uploading a patch FLUID-3434-1.patch.txt. I added a class fl-infusionBuilder-clickable, to the css file and added that class to the reset and select all buttons. The class is added programmatically added to the download button when it is enabled, and removed when it is disabled.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-02-01T13:28:54.000-0500",
      "body": "See attached patch.\n"
    }
  ]
}
---
The cursor should change to a hand when hovered over the actionable items inside the "Download Options" box.

        