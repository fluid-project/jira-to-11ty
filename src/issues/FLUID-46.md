---json
{
  "title": "FLUID-46",
  "summary": "Class names are too Lightbox-specific",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2007-10-05T10:35:37.000-0400",
  "updated": "2007-11-02T15:30:22.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-09T12:00:02.000-0400",
      "body": "We should also ensure that the style names are properly namespaced\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-11-02T15:30:22.000-0400",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-68#icft=FLUID-68>\n"
    }
  ]
}
---
The CSS class names used by the Reorderer to change the state of orderables from 'default' to 'selected' or 'dragging' currently include the word "image." This is no longer appropriate given that the Reorderer has been factored out of the Lightbox and is used for things other than images. The names should be changed to something more generic.

        