---json
{
  "title": "FLUID-152",
  "summary": "Dropping a thumbnail from the first row after the first thumb in the second row causes it to be dropped at the end of the first row.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Jonathan Hung",
  "reporter": "Michelle D'Souza",
  "date": "2007-12-18T16:55:06.000-0500",
  "updated": "2008-07-11T14:36:43.000-0400",
  "versions": [],
  "fixVersions": [],
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
      "author": "Michelle D'Souza",
      "date": "2007-12-18T16:58:32.000-0500",
      "body": "I think this behaviour was introduced while fixing Fluid-100\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-12-20T16:55:28.000-0500",
      "body": "During testing of the fix for <https://fluidproject.atlassian.net/browse/FLUID-146#icft=FLUID-146>, I noticed that this bug (<https://fluidproject.atlassian.net/browse/FLUID-152#icft=FLUID-152>) happens only when dragging on whitespace (in a lightbox thumbnail).  If dragging is initiated on the image or the link text, then the drop behaviour is correct.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-01-31T16:23:11.000-0500",
      "body": "A variation on this problem:\n\n1\\. pick up 2nd thumbnail from second row using white space WITH the mouse pointer near the right-edge of the thumbnail box\\\n2\\. drag to 1st row between the 2nd last and last item WITH the mouse pointer hovering over last item\\\n3\\. release\\\n4\\. dragged item appears as first item on 2nd row instead of being last item on the first row.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-02-01T15:33:35.000-0500",
      "body": "I did some investigating and have some more information why this bug is happening.&#x20;\n\nisMouseBefore() is returning a bad value for this edge case. You can see this clearly by placing the following Firebug output just before the return (evt.clientX < mid); statement:\n\nconsole.log (\"evt.clientX  = \" + evt.clientX  + \", mid = \" + mid);\n\nFollowing the directions in my comment above; as you watch the console output, you will see that the \"mid\" values are all correct while dragging with the mouse. But once releasing the mouse button, the mid value changes drastically thus resulting in an erroneous item move.\n\nOn closer examination, jQuery (droppableEl).offset().left  is not returning a value we expect after the mouse has been released and mouseMoveItem() is called.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-02-05T13:29:58.000-0500",
      "body": "Did some digging. It appears that drop() was being called twice during this particular mouse action. Further investigation revealed that this is indeed a bug in jQuery UI 1.0. <http://dev.jquery.com/ticket/1547>\n\nFollowing bstar's temporary fix documented in the #1547 bug report, this problem in <https://fluidproject.atlassian.net/browse/FLUID-152#icft=FLUID-152> appears to be fixed.\n\nI will commit both a patch and a modified version of ui.droppable.js to our SVN and document appropriately.\n\nWhen jQueryUI v1.5 is available, we should check to see that #1547 is fixed without our patch and remove our patch as necessary.\n"
    }
  ]
}
---
To recreate:

1\. Pick up a thumbnail from the first row.\
2\. Drag it into position so that the drop marker appears after the first item in the second row and the mouse pointer is hovering over the first item in the second row.\
3\. Drop the thumbnail.\
4\. Notice that it was been placed in front of the first item in the second row which is at the end of the first row.

        