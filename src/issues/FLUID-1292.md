---json
{
  "title": "FLUID-1292",
  "summary": "When dragging avatar in Sortable Conference List, the avatar is set to 1 greater than the highest list number.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Joseph Vernuccio",
  "date": "2008-08-21T14:02:33.000-0400",
  "updated": "2008-11-13T13:42:00.000-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-910/",
      "key": "FLUID-910",
      "summary": "List elements with a sub-list, don't show number while dragging, using Opera 9.5"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-27T14:55:32.000-0400",
      "body": "I believe this was resolved along with fluid-1186 in r5431\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:42:00.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
When dragging avatar in Sortable Conference List, the avatar is set to 1 greater than the highest list number. \
Steps to reproduce:&#x20;

1\) Open the browser and navigate to the specified URL: \
<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

2\) Drag avatar up or down and the number will change while the avatar is being dragged to '11' &#x20;

The number doesn't appear in Opera 9.5, when the list item contains a sublist

        