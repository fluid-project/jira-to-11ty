---json
{
  "title": "FLUID-187",
  "summary": "Allow portlets to be dragged into empty columns",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2008-01-28T11:28:51.000-0500",
  "updated": "2011-02-22T16:27:48.427-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-159/",
      "key": "FLUID-159",
      "summary": "Moving all portlets out of a column results in an empty nonfunctional column"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-406/",
      "key": "FLUID-406"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-407/",
      "key": "FLUID-407"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Barbara Glover",
      "date": "2008-02-11T09:55:05.000-0500",
      "body": "This bug was confirmed with user testing as a usability issue that is important.  During our user test, there was a locked portlet at the top of the left column and no portlets below it.  The user tried to drag a portlet from the right column into the left column.  The user did not know they had to be hovering over the locked portlet (or any portlet) and just dragged straight across to the left column where it was empty.  It is not intuitive to the user that they would have to first hover over a portlet in this case.\n\nAlso in the case a column was completely empty, the user may still want to move a portlet into the empty column.  This is something they would intuitively think they could do.\n\n* Barbara\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-25T16:16:59.000-0400",
      "body": "A fix has been implemented that considers columns as a special 'container' form of drop target, and adds the notion of \"INSIDE\" as a drop position. It works, but there is an inconsistent problem with the UI: Sometimes in the uPortal mockup file, if a portlet is dragged **quickly** over another portlet, the drop marker is incorrectly displayed at the end of the column instead of relative to the target portlet. In these cases, it seems the 'greedy' droppable option is not being heeded - both the column and the portlet are getting the 'over' event (the 'greedy' option is supposed to prevent that, and in most cases does). We will be investigating further, and if necessary filing bugs against jQuery.ui\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-25T16:27:56.000-0400",
      "body": "Also, currently you cannot use the keyboard to move portlets into an empty column.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-26T14:26:39.000-0400",
      "body": "Using the keyboard to move into an empty column is now working. \\\nNavigating with the keyboard over an empty column is not implemented yet.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-26T15:46:01.000-0400",
      "body": "Navigating with the keyboard over an empty column is now implemented.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-03-27T11:38:59.000-0400",
      "body": "Regarding the above-mentioned issue \"if a portlet is dragged **quickly** over another portlet, the drop marker is incorrectly displayed at the end of the column instead of relative to the target portlet\":\n\nWith the 'greedy' flag on (which it is), the column should get an 'out' event when the dragging cursor moves from the column space into the portlet space, and on this out, we unbind the mousemove handler, trackMouseMovement() (which is what displays the dropMarker) from the column (and bind it to the portlet on the portlet's 'over').\n\nWe **are** getting the out event, and hence we are calling unbind(), but the mousemove handler continues fire, and hence continues to incorrectly display the dropMarker. So it looks like the unbind() is not properly unbinding.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:48.425-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
This entails rethinking our definition of a drop target to allow empty columns to be drop targets, rather than only treating portlets as drop targets.

        