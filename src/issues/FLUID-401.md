---json
{
  "title": "FLUID-401",
  "summary": "In IE 6+, you have to press the arrow key twice when attempting to move an item with the keyboard.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2008-03-24T13:40:22.000-0400",
  "updated": "2008-04-28T15:02:42.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-454/",
      "key": "FLUID-454"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-400/",
      "key": "FLUID-400",
      "summary": "Trouble dragging an element below the last movable element in a list."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-400/",
      "key": "FLUID-400"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T16:48:41.000-0400",
      "body": "Justin, we can't reproduce the issue you mention about the avatar not being visible when dragging an item. Can you provide more details on how to make this happen?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-09T09:02:02.000-0400",
      "body": "NOTE: There are 2 bugs in this Jira. It should be split into two bugs.\n\nRe: Double tap to move item.\n\nUsing Fluid rev 4790 (8:54am Apr 9) I am able to reproduce on WinXP with IE6 and 7.\n\nTo reproduce\n\n* Open Lightbox.html in IE 6 or 7\n* mouse click an item to have it highlighted\n* First CTRL+ Arrow is fine.\n* With CTRL still depressed, pressing Arrow appears to do nothing\\*\n* With CTRL still depressed, pressing Arrow moves the selected item in the direction of the arrow\n\n- In reality something does happen, but it's very subtle. It looks like focus changes because the thumbnail image shifts 1px. It's as if the focus is being changed from the thumbnail to either the link text or the outer container?\n\nRe: No avatar.\\\nI get an avatar when dragging with mouse. Can't reproduce the no avatar bug.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-14T14:19:57.000-0400",
      "body": "Anastasia and I fixed this problem. In IE, a check for the Selected style was being done before the Selected style was being applied to an item. To fix this we changed the check to look for the absence of Dragging style instead. This appears to have fixed the problem in IE and works fine in FF.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-28T15:02:42.000-0400",
      "body": "Verified fix in IE7 (WinXP)\n"
    }
  ]
}
---
1\. When dragging an item with the mouse, there is no avatar.

2\. When using the keyboard to move an item, after the first move, the arrow key has to be tapped twice before the element will move. On the first tap, the styling changes.

These errors are not present in Firefox 2 (Mac OS 10.5, Win XP)

Link to sites: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/scheduler.html>\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/RSFStyleScheduler.html>

NOTE: on the second site, this only true for the nested items. The top level elements work appropriately here and it also works on this site    \
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/todo-list/sortable-todo-list.html>\
I'm not sure what the difference is.

See Fluid-Jira 400 (<http://issues.fluidproject.org/browse/FLUID-400>) for other issues that are caused with these same lists.

        