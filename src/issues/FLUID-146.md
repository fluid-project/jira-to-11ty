---json
{
  "title": "FLUID-146",
  "summary": "No drop target visual feedback when clicking on image or link at beginning of drag during drag-and-drop.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-12-17T11:05:56.000-0500",
  "updated": "2008-11-13T13:27:29.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-100/",
      "key": "FLUID-100",
      "summary": "With mouse-based drag-and-drop, one cannot drop on a position before the first item."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-12-20T11:00:33.000-0500",
      "body": "This behaviour also occurs with other non-lightbox test cases, even when the user clicks on the actual element that is orderable.\n\nFor example: markupExamples/reorderer/concrete/todo-list/sortable-styled-todo-list.html\\\nEven clicking on the list items that have no lists nested within them, and dragging over top of list items with no nested lists within them, the drop targets to not receive mouse movement events.\n\nOddly, the abstract list test (markupExamples/reorderer/abstract/unordered-list.html) seems to work just fine.\n\nIt is not clear why the mousemove events are disappearing, or who is swallowing them.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-12-20T14:29:20.000-0500",
      "body": "A follow up to the notion that the events are being \"swallowed\".  It's not clear that they are.\n\nFirst, it **may** be a function of the event model capture and/or bubble phases.  The mouse is over the avatar, which is in a part of the dom that isn't on the capture nor bubble path.  It's possible that the mouse movement events are not being directed at the drop target at all.  That is, it's not that they are being swallowed before the drop target gets a chance to handle them; it's that they will never get to the drop target.\n\nSecondly, we are using jQuery().bind().  It's not clear (to me, at least) what jQuery does with that vis-a-vis the capturing/bubbling of events, nor how it handles different browser event models.\n\nA possibility is to try using standard dom1 or dom2 calls to add a mouse movement listener directly to the drop target and see what happens.  If the first point above is right, then adding a mouse movement listener shouldn't work either.  If it does work, then there is something about how jQuery handles events that we need to understand better.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-12-20T15:14:40.000-0500",
      "body": "Jonathan and I have confirmed that the avatar is what is the target of the mousemove event, when the cursor is indeed over the avatar. The next question is how to address this.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-20T16:32:19.000-0500",
      "body": "By attaching the mousemove event handler to the avatar itself as well as to the droppable, the handler fires when we want it to.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:27:29.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
When initiating a drag-and-drop operation, if one clicks on the image in the thumbnail or the link, the mouse movement listener on the drop targets do not appear to receive the mouse movement events.  Hence, no drop marker is displayed, since its display is based on the position of the mouse over the drop target.

        