---json
{
  "title": "FLUID-149",
  "summary": "Drop targets inconsistent in IE6 & 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Michelle D'Souza",
  "reporter": "Jonathan Hung",
  "date": "2007-12-17T16:40:44.000-0500",
  "updated": "2008-01-24T15:10:07.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP, true IE6 and IE 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-01-24T15:10:07.000-0500",
      "body": "This bug is a duplicate of two other bugs:\\\nFluid-146: Drop targets not being rendered\\\nFluid-116 Dragging image quickly causes it to freeze\n"
    }
  ]
}
---
When performing a drag and drop using the white space of a thumbnail, the drop target markers are inconsistently shown. Most noticeable problems are: drop target sticks to another location even after the dragging has move elsewhere; drop targets do not render at all.

        