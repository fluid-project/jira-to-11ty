---json
{
  "title": "FLUID-3442",
  "summary": "Selecting all, then sequentially deselecting inconsistently deselects dependencies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2009-12-17T11:30:51.000-0500",
  "updated": "2013-09-06T13:56:30.977-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T13:56:21.047-0400",
      "body": "This is by design. Any dependencies that are depended on by more than one module will remain until either it is removed, or all of the modules depending on it have been deselected.\n"
    }
  ]
}
---
To replicate issue:

* Click select all.
* Deselect sequentially, top-to-bottom, left-to-right.

Example behavior:

* Deselecting Infusion Framework Core will not deselect its dependencies.
* Deselecting Inline Edit will deselect Undo.

        