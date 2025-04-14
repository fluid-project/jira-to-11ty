---json
{
  "title": "FLUID-1485",
  "summary": "Double clicking while picking up an element causes the avatar to freeze.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-08T12:53:49.000-0400",
  "updated": "2008-09-09T09:08:35.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1485/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-08T12:54:49.000-0400",
      "body": "'screenshot-1' shows the avatar frozen and the pointer causing a drop target to appear.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T17:09:15.000-0400",
      "body": "Resolved at revision 5489, as well as another \"squidge-clicking\" issues.\n\nIn general when you see things \"freeze\" it is a sign that there will be something relevant in the Firebug console which you should also paste if you can - cheers 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T09:08:35.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Double clicking while picking up an element causes the avatar to freeze. The pointer will still assume it is dragging the avatar and will cause drop markers to appear.

Steps to reproduce:

1\) Open the sortable vertical list demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

2\) Start quicly clicking the mouse while you pick up the element.

Notice that the avatar freezes and the pointer is able to generate drop targets as you move it around the screen

        