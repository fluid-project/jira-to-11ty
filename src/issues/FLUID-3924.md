---json
{
  "title": "FLUID-3924",
  "summary": "Focus styling persists after first reorder in grid reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2010-12-16T14:03:50.329-0500",
  "updated": "2024-07-22T13:55:28.235-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Chrome 8, Firefox 3.6, IE 8 in Windows XP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4437/",
      "key": "FLUID-4437"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-22T13:55:28.072-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
After reordering an element either by keyboard or mouse, focus styling persists even after focus has left the reorderer.

        