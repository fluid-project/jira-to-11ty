---json
{
  "title": "FLUID-398",
  "summary": "Reordering elements in a numbered list increments list numbering, while dragging.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2008-03-24T11:36:26.000-0400",
  "updated": "2016-11-14T12:22:48.439-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.6, Safari 3 (Mac OS 10.5)\\\nSafari 5 (Mac OS 10.6)\\\nIE6, IE7, IE8, Opera 9.6 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nIE 8, IE 9, IE 10, IE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T14:32:51.000-0400",
      "body": "Using a pluggable avatar will likely solve half of the issue. The default behaviour of the avatar is to clone the node being dragged. In the case of an ordered list this means that we are adding a numbered list item. To solve the rest of the issue we may need to make the drop marker pluggable. The current behaviour of the drop marker is to create a node of the same type as the item being dragged. We create nodes of the same type as what's being dragged in both cases to ensure HTML validity.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-28T12:31:41.000-0400",
      "body": "In the current version (28April08).\n\nFF2 (Mac OS 10.5, WinXP): Shows the avatar with a list number, one higher than the largest number in the list.\n\nIE7 (WinXP): Shows the avatar with a list number of 1. No matter where it is selected from.\n\nBecause the dragged element remains as part of the list, it is hard to determine, at first glance, where an element will be dropped in the list. (i.e. what number it will take when dropped). It would be helpful to the user if the avatar were to show the the list number corresponding to where the drop target is currently shown.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-11T11:33:33.000-0400",
      "body": "changed environment and updated description\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T18:40:48.000-0400",
      "body": "With the fix for <https://fluidproject.atlassian.net/browse/FLUID-1141#icft=FLUID-1141>, this behaviour is now a little different - perhaps, the problem is \"half-solved\". The avatar is now bound directly to \\<body> which means that it no longer itself participants in the numbering. Therefore I no longer see the Firefox behaviour described above. However, the \"increase by one\" behaviour under Opera is still there - this is not because of the avatar, but because of the drop target.&#x20;\n\nI believe that we might decide to resolve the remainder of the issue by simply declaring the drop target to be a DIV. I have seen code within JQuery which will \"cleanse\" any injected material by forcing it to be valid. Of course, it may choose to do this by wrapping it in an \\<li> in which case we would be back to the start 😛\n\nI can't easily think of a way we could get the desired behaviour, that of having the avatar \"show the right number\". To do this, it would have to be itself being moved around the document, to the same location as the drop target. I am not convinced that the JQuery draggable library would stand for this, although I could be wrong...\n"
    }
  ]
}
---
When reorderable elements are in a numbered list, dragging an element results in the list size growing by 1. It appears that all original elements remain part of the number scheme as well as the drop target. When the element is dropped, the numbering returns to their correct values.

See the following links:\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

        