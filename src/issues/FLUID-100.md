---json
{
  "title": "FLUID-100",
  "summary": "With mouse-based drag-and-drop, one cannot drop on a position before the first item.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-11-05T16:20:05.000-0500",
  "updated": "2008-11-13T13:26:41.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-148/",
      "key": "FLUID-148"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-146/",
      "key": "FLUID-146"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-147/",
      "key": "FLUID-147"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-152/",
      "key": "FLUID-152"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2007-11-07T15:40:42.000-0500",
      "body": "Just chatted with Joseph about this and thought I'd add a commment.\n\nFrom a UX perspective we definitely want users to able to drop objects in front of the first one.  I looks like you can't drop it in front of the first one of any row.  My original thinking was that hopefully users wouldn't encounter this much.  Since it's every row, they may encounter often.\n\nI still don't think this should stop the release for  few reasons:\n\n* &#x20;The next versions of the Image Gallery won't likely be released until summer 2008 so we have plenty of time to fix this for that implementation.\n* &#x20;Although it could be bad for new implementations, I assume any fix will be backward compatible and developers will be able to apply a patch.  We can assume there will be some ramp up time before anything gets released to users that is using the reorderer.  Hopefully we can get it fixed before then.\n* &#x20;Looking at the current list of jiras, I would put this one toward the bottom of the list of priorities and there seems to be plenty to do before the release.\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2007-11-07T15:46:03.000-0500",
      "body": "Changed to fix for 0.1 version\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-07T16:00:32.000-0500",
      "body": "In describing and discussing this issue to Daphne, I noticed that the bug can be expressed more generally:\n\nOne cannot drop the dragged item before any other item; the drop point is always after another item.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-21T10:58:42.000-0500",
      "body": "Assigning to me to indicate that I would make the code changes.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-26T16:37:35.000-0500",
      "body": "Preliminary test code shows that this can be done by attaching an event handler for mouse movement when the drag enters a droppable.  There are a number of outstanding issues:\n\n* the mouse move handler needs to be attached to the droppable when the drag gesture enters its space, and detached when it leaves ( the \"over\" and \"out\" options to jQuery.droppable().  I could not successfully remove the mouse-move handler on \"out\".\n\n- I used \"dojo.connect()\" to wire up the mouse-move listener.  We should switch to jQuery().mousemove() to be consistent with the rest of the drag-and-drop operation.\n\n* I defined a new method,Reorderer, beforeOrAfter (evt, element), to calculate where the mouse was relative the width of the droppable.   The \"evt\" argument is a dojo event.  It should be a jQuery() event – see last point.  More importantly, beforeOrAfter() should be a method of the layout handler since it is the layouthandler that \"knows\" about the spatial properties of the draggables and droppables.  At present, this means modifiying GridLayoutHandler and LIstLayoutHandler.\n\nSolving all of these issues will take more time than is available for a 0.1 release; thus, moving this task to 0.2.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-12-17T11:01:48.000-0500",
      "body": "Positioining the drop marker to the \"left\" of the drop target, as well as the \"right\" now works.  However, the fix has spawned a couple of new issues – see the related issues.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:26:41.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
Currently, the Reorderer's drag-and-drop implementation only allows dropping the dragged item to just after the item the mouse is over.  Using the lightbox as an example, dragging a thumbnail over any other thumbnail allows dropping after the "hovered-over" thumbnail.  In particular, that means one cannot drag a thumbnail to a position before the first one.

The is very likely incorrect from a user experience point of view.  I can think of a technical fix, but I don't know if this constitutes a blocker for the 0.1 release.

        