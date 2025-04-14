---json
{
  "title": "FLUID-400",
  "summary": "Trouble dragging an element below the last movable element in a list.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-03-24T13:28:16.000-0400",
  "updated": "2008-07-04T19:37:18.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Firefox 2 (Mac OS 10.5), IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-401/",
      "key": "FLUID-401",
      "summary": "In IE 6+, you have to press the arrow key twice when attempting to move an item with the keyboard."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-401/",
      "key": "FLUID-401"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T15:22:32.000-0400",
      "body": "The nested scheduler example needs some cleaning up.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-04-11T10:37:48.000-0400",
      "body": "Note that currently (just before 0.3 release) I see the somewhat opposite problem in the sample - \\\n<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/todo-list/sortable-styled-todo-list.html>\\\nFor example, when moving the drop target outside the list entirely, the visual representation of the target remains (red bar), yet the drop is not accepted. I think it is important to make sure that in absolutely all cases, the visual appearance of the drop indicator coincides with the possibility of making a drop.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-04T19:37:18.000-0400",
      "body": "Cannot reproduce the issue in current build.&#x20;\n\nTested on:\n\nMac 0S X (FF2)\n\nWinXP (FF2, FF3, IE6, IE7)\n"
    }
  ]
}
---
It is dificult to drag an item below the last movable element in a list. If any drop targets appear (anywhere but below the last movable element), the drop target does not appear below the last element and the item cannot be dropped there.&#x20;

Link to sites: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/RSFStyleScheduler.html>

NOTE: on the second site, this only true for the nested items. The top level elements can be dragged below the the last movable element.\
also, on this site <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/todo-list/sortable-todo-list.html>\
there are no issues. I'm not sure what the difference is.

        