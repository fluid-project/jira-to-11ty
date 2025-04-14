---json
{
  "title": "FLUID-1337",
  "summary": "Reorderer - Sortable Vertical List double dropzone",
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
  "date": "2008-08-28T15:27:57.000-0400",
  "updated": "2008-11-13T13:42:45.000-0500",
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
      "date": "2008-09-07T18:16:14.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:42:45.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
Vertical sorter:

The dropzones are activated in two cursor locations: below (or above) the midpoint of the currently hovered over item, and in the interstice between items. This may be by design. &#x20;

        