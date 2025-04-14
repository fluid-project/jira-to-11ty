---json
{
  "title": "FLUID-538",
  "summary": "Drop target appears when avatar not in a valid drop position",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2008-04-28T12:42:53.000-0400",
  "updated": "2008-08-11T08:47:49.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5, WinXP), IE7 (WinXP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-479/",
      "key": "FLUID-479",
      "summary": "Drop marker incorrect when avatar is dropped in white space at end of row."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-601/",
      "key": "FLUID-601"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-05-15T12:13:05.000-0400",
      "body": "Also seen in\\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/jquery-tabs/jquery-tabs.html>\n\nTo reproduce:\n\n* if dragging and mouse pointer is just above or below the tabs, releasing mouse will not drop tab at the indicated drop marker.\n* if dragging and mouse pointer is just beyond the last tab, releasing the mouse will not drop tab at the indicated drop marker.\n\nThis example is particularly hard to use because of combination of the tight drop zones and this bug.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-08T10:27:05.000-0400",
      "body": "Resolved as part of comprehensive drag and drop reorganisation at rev 5338 (\"DragManager\" created)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-11T08:47:49.000-0400",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5, Win XP)\\\nIE7 (Win XP)\n"
    }
  ]
}
---
On WinXP:

Drop target appears when avatar not in a valid drop position,  happens with all drop targets. Unless the cursor is placed in just the correct position, the avatar will snap back to it's original location.&#x20;

On Mac OS 10.5

Drop target appears when avatar not in a valid drop position only happens for the bottom most drop target.

Test site: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

        