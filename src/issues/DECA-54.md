---json
{
  "title": "DECA-54",
  "summary": "Drag and Keyboard Move style not changing with on-drag event",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2010-03-29T14:32:03.000-0400",
  "updated": "2012-05-25T13:32:22.144-0400",
  "versions": [
    "0.3",
    "0.4",
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": "Ubuntu 9.X FF3.6\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3288/",
      "key": "FLUID-3288",
      "summary": "Moving an item with the keyboard \"loses\" the \"ctrl-key is down\" status"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3568/",
      "key": "FLUID-3568",
      "summary": "Keyboard reordering requires two keystrokes to commence move action"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-04-20T09:56:19.000-0400",
      "body": "Please confirm fixed with Fluid-3568.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-06-17T13:29:35.529-0400",
      "body": "Still an issue, tested on Ubuntu 9.10, Infusion 1.2, FF 3.5.8\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-14T15:48:42.676-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-19T12:48:01.013-0400",
      "body": "It appears that this issue is caused by the ctrlKey property on the event object not setting the value to true on keydown. Rather this property is set to true on keyup.&#x20;\n\nThis causes the conditional on line 217 of Reorderer.js to fail because isMove(evt) returns false.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-19T15:38:57.185-0400",
      "body": "Some further investigation shows that the behaviour displayed in linux is opposite of that elsewhere. In firefox 3.6 on Mac OS 10.6 for example, keydown has ctrlKey set to true, but keyup is false\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T15:38:41.135-0500",
      "body": "This issue is partially fixed. Mouse dragging styles now apply properly. However, keyboard actions still require two key presses to initiate.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:32:19.601-0400",
      "body": "The ui for managing pages has been removed. This interaction no longer exists\n"
    }
  ]
}
---
As a user commences dragging, the drag style does not change.

The correct behaviour should be a change in style similar to the style when a thumbnail is being dragged.

        