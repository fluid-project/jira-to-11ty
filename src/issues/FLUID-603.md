---json
{
  "title": "FLUID-603",
  "summary": "Drag and drop portlet on top of Lightbox orderable inconsistent behaviour in IE7 and FF2 on Windows",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-05-15T13:18:01.000-0400",
  "updated": "2008-11-13T13:33:20.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Windows XP FF2, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-16T10:44:42.000-0400",
      "body": "This behaviour is related to the use of the 'greedy' flag in jQuery UI's droppable. It seems that taking away the 'greedy' flag for the thumbnails results in correct behaviour in FF2.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-16T15:23:17.000-0400",
      "body": "The browser inconsistency seems to be caused by jQuery.ui.intersect() (in ui.droppable.js). When it compares the draggable with the droppables, on FF2, it considers the draggable to be intersecting the thumbnail droppable that it's over, whereas on IE7, it doesn't.\n\nI haven't yet figured out why this is the case, or exactly how this is affecting the subsequent behavior.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-07T15:28:26.000-0400",
      "body": "The bug appears to be fixed in current build.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:33:20.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
Dragging and dropping a portlet on top of a Lightbox orderable is different in IE7 than it is in FF2.

In FF2, dropping a portlet on top of a Lightbox orderable doesn't do anything, despite a drop target being shown.\
In IE7, dropping a portlet on top of a Lightbox orderable yields proper behaviour (drops in position indicated by marker).

        