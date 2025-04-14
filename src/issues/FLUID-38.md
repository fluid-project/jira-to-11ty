---json
{
  "title": "FLUID-38",
  "summary": "Opera issues: tab focus fails, CSS size error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2007-09-17T11:09:04.000-0400",
  "updated": "2008-09-16T10:05:44.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.21\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T10:05:44.000-0400",
      "body": "Cannot reproduce this error.&#x20;\n\nOur browser support does not include Opera 9.21.\\\nI did try it on Opera 9.5 (Mac OS 10.5, Win XP) and could not reproduce the error.\n"
    }
  ]
}
---
In Opera, it is impossible to tab focus to the first reordered item, in order to operate reordering via the keyboard.\
If the focus is applied to an item by mouse clicking, keyboard ordering can then be used.

The CSS style for the border of a "active" item does not work correctly in opera, it extends somewhat over the right edge of the item's cell. This particular border only seems visible immediately after a drag operation starts or finishes, around the fruit image itself.

        