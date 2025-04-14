---json
{
  "title": "FLUID-1481",
  "summary": "The keyboard interaction is not following the appropriate path for key presses.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-08T11:16:45.000-0400",
  "updated": "2008-09-09T08:46:30.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-08T12:45:34.000-0400",
      "body": "In FF3 (Mac OS 10.5, Win XP) you can move back and forth between columns are changing the direction of keypress. If you got into the column by pressing down, pressing up will let you switch back to the other column.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T14:47:03.000-0400",
      "body": "Fixed at revision 5486\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T08:46:30.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Keyboard interaction does not follow the appropriate rules.

This is the appropriate behaviour:\
left arrow / j: move to left column\
right arrow / k: move to right column\
up arrow / i: move up one portlet or wrap to bottom\
down arrow / m: move down one portlet or wrap to top

Currently:

The only way to move to the right column is by moving up or down.&#x20;

After you enter the right hand column, you cannot get back to the left hand column.

Steps to repoduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Press the tab key until one of the portlets has focus.

3\) Press the down arrow key. Notice that this will allow you to move to the right hand column

4\) Attempt to use the keyboard to return to the left hand column. Notice that you are trapped in the right hand column

        