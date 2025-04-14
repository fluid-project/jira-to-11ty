---json
{
  "title": "FLUID-453",
  "summary": "Reorderer: cannot tab to sortable element",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T15:33:14.000-0400",
  "updated": "2008-11-13T13:28:00.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "WinXP, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T11:01:05.000-0400",
      "body": "It actually does select a sortable list element, but there is absolutely no visual indication of this fact, so you can't tell at all.\n\nI'm not sure what the solution is, since this file is intended as part of a tutorial... I'll think about it.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T11:36:34.000-0400",
      "body": "The file has been removed from the test protocol, as it is not suitable for testing purposes.\n"
    }
  ]
}
---
On the unstyled sortable to do list ( <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/todo-list/sortable-todo-list.html> ) tabbling never takes you to (selects) a sortable list element.

        