---json
{
  "title": "FLUID-455",
  "summary": "Reorderer: improper move location shown for unstyled sortable to do list item",
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
  "date": "2008-04-04T15:53:01.000-0400",
  "updated": "2008-11-13T13:28:08.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T13:19:29.000-0400",
      "body": "The page in question has been removed from the list of test files, as it is not suitable for testing purposes.\n"
    }
  ]
}
---
For the unstyled sortable to do list ( <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/todo-list/sortable-todo-list.html> ), as you begin to drag a single-row list element to a new location a blank line with a number beside it will open up ahead of your direction of movement. This implies that this line will be the new location for the dragged item on the list when it is dripped; however this is not the case, the item will be placed on the line preceeding the numberedd blank line. So you are led to believe for example that the moved item will become #8 on the list, but when dropped it becomes #7.

        