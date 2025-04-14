---json
{
  "title": "FLUID-1336",
  "summary": "Reorderer - Sortable Vertical List last dropzone odd",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gonzalo David Silverio",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-08-28T15:27:29.000-0400",
  "updated": "2008-11-13T13:42:22.000-0500",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF3/OSX10.4&#x20;\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:15:43.000-0400",
      "body": "This should be resolved by result of the new \"Drop Manager\".\\\nDrop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:42:22.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
Vertican sorter:

It is a bit hard to activate the last drop zone. There is a significant offset between the cursor position and the boundaries of the drop zone activation - more than in  dropzones that occur at top or in middle.

        