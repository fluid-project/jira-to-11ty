---json
{
  "title": "FLUID-20",
  "summary": "Drag and Drop: dropping an item in the whitespace between items causes the item to be appended to the end of the list.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2007-06-29T10:10:38.000-0400",
  "updated": "2007-10-22T11:40:25.000-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T11:40:25.000-0400",
      "body": "This was a bug when we were using dojo's drag and drop. Now that we've moved to using jQuery UI's drag and drop this is no longer an issue.\n"
    }
  ]
}
---
Currently if an item is dropped in the whitespace between two items, it is actually being dropped on the containing div that holds all of the items so it is put at the end. From a user perspective it is completely confusing.&#x20;

        