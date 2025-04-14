---json
{
  "title": "FLUID-910",
  "summary": "List elements with a sub-list, don't show number while dragging, using Opera 9.5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2008-07-16T13:55:47.000-0400",
  "updated": "2008-08-22T08:32:13.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1292/",
      "key": "FLUID-1292"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-910/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-910/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T13:57:09.000-0400",
      "body": "'screenshot-1' shows the avatar \"12. Book caterer\" displaying the number on the left.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-16T13:58:00.000-0400",
      "body": "'sreenshot-2' shows the avatar \"Book facilities ...\" without the number to the left\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-22T08:32:13.000-0400",
      "body": "The number should probably not display on the avatar and is captured more generally in fluid-1292.\n"
    }
  ]
}
---
A list element which contains a sub-list, does not show the list number while dragging.

1\) Open the Sortable Vertical List demo from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

2\) Drag an element which does not contain a sub-list. Notice that the avatar contains a number on the left hand side

3\) Drag an element which does contain a sub-list. Notice that the avatar does not contain a number on the left side

        