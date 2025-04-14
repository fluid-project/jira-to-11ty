---json
{
  "title": "FLUID-6049",
  "summary": "undo/redo should have a controls relationship with the inline edit.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-08T13:39:24.569-0500",
  "updated": "2017-01-11T12:31:19.459-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When making inline edits an undo/redo control is often inserted after the inline edit field. This control should be marked up with `aria-controls` to inform an AT that it will affect the content in the inline edit.

        