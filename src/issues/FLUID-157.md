---json
{
  "title": "FLUID-157",
  "summary": "Fluid.js and Reorderer should use our jQuery tabindex plugin for getting and setting tabindices in a cross-browser way.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-01-07T17:02:02.000-0500",
  "updated": "2008-08-09T14:28:40.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-01-10T15:20:03.000-0500",
      "body": "Removed our broken tabindex code and replaced it with the jQuery plugin. Tests pass.\n"
    }
  ]
}
---
We currently set tabindices in a browser-incompatible way. Replace all getting setting of tabindex with our new jQuery tabindex plugin.

        