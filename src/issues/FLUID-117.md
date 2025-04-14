---json
{
  "title": "FLUID-117",
  "summary": "No indication that an image can be dragged.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Daphne Ogle",
  "reporter": "Justin Obara",
  "date": "2007-11-19T12:49:37.000-0500",
  "updated": "2011-01-04T11:28:18.662-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE7, Firefox\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-451/",
      "key": "FLUID-451"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-19T16:52:45.000-0500",
      "body": "What should happen when the user clicks and releases in the white-space of a thumbnail? Should the image be opened or should the user remain in the thumbnail view with that thumbnail selected?&#x20;\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-20T14:42:20.000-0500",
      "body": "The Reorderer currently allows for single thumbnail drag-and-drop.  However, the ability to move a set of selected thumbnails is in the Reorderer's future.  On the desktop, selecting a group of items done by:\\\n(a) \"encircling\" the desired item by clicking and dragging the mouse – the visual feedback is a rubber-band box intersecting the items, or\\\n(b) clicking (selecting) items while holding down a modifier key (on Mac, shift-click If the user wants to a continuous set of items, cmd-click for a discontinuous set).\n\nIn the above scenario, one selects a single item by simply clicking on it.  In the context of the lightbox, single item selection could be accomplished by clicking on a thumbnail's \"dead\" space.  However, if the entire thumbnail triggers the link, then single selection would have to be accomplished by either (a) encircling it, or (b) shift-click.  Neither is as straight forward as just clicking on it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-04T11:28:18.652-0500",
      "body": "The  cursor and other styling changes are used to indicate that it is reorderable.\n"
    }
  ]
}
---
A mouse press and hold, to drag an image, does not show any indication that the image is now able to move. The user has to attempt to move the image to realize that it can be dragged. The pointer could change from a pointing finger to a closed fist to indicate that the image has been grabbed.

        