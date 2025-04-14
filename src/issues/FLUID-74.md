---json
{
  "title": "FLUID-74",
  "summary": "Drag Avatar needs CSS classname applied and new styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Shaw-Han Liem",
  "date": "2007-10-25T16:33:08.000-0400",
  "updated": "2011-01-28T12:12:30.116-0500",
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
      "author": "Joseph Scheuhammer",
      "date": "2007-11-07T16:55:49.000-0500",
      "body": "The Reorderer now adds the class 'orderable-avatar' to the element that represents the avatar.  Note that since the avatar is a clone of the orderable to be moved, it already has the same classes as that orderable.  In the Lightbox, these classes are:\n\n* float\n* orderable-default, or orderable-selected \\*\n* ui-draggable (added by jQuery UI)\n* ui-droppable (added by jQuery UI)\n\n- the avatar has the 'orderable-default' or 'orderable-selected' class depending on whether the item dragged was the currently focussed item or not when it was picked up.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-28T12:09:45.049-0500",
      "body": "Reopening these issues to add the reorderercomponent to them.\n"
    }
  ]
}
---
The dragging avatar should have a different CSS class than the original image, so that it may be styled independently.

Once the avatar has a new classname, we can style it with a lower opacity.

        