---json
{
  "title": "FLUID-601",
  "summary": "Dropping orderable directly on top of drop target marker doesn't work.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jonathan Hung",
  "date": "2008-05-15T10:57:04.000-0400",
  "updated": "2008-11-13T13:31:46.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-538/",
      "key": "FLUID-538",
      "summary": "Drop target appears when avatar not in a valid drop position"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-16T09:57:04.000-0400",
      "body": "In the lightbox, the container holding the thumbnails is not a drop target. Dropping on the drop marker is the same as dropping on the container which is invalid.&#x20;\n\nThe bug here is that the drop marker should disappear when the mouse is no longer hovering over a valid drop target.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T10:26:50.000-0400",
      "body": "Resolved as part of comprehensive drag and drop reorganisation at rev 5338 (\"DragManager\" created)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:31:46.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
dragging and dropping a thumbnail directly over a drop marker (the red vertical bar) does not work. Releasing on top of the drop marker will "snap" the dragged orderable back to its original location.

This occurs if the mouse pointer is positioned directly over a drop marker.

        