---json
{
  "title": "FLUID-3648",
  "summary": "Can trigger undo/redo while in edit mode for rich text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2010-04-14T13:15:29.000-0400",
  "updated": "2014-07-14T10:25:05.020-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T09:51:18.547-0500",
      "body": "Is this undesirable? I guess the confusion would be that the user doesn't expect Undo to persist beyond their most immediate edit in the Editor.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:37:45.677-0400",
      "body": "In v1.4, I'm actually unable to reproduce this in the Rich Text Editor: while editing, the \"undo\" link disappears. However, in the simple text version, the undo icon is there and is clickable: Clicking it ends the current edit but doesn't cancel the changes you were in the middle of i.e. doesn't do anything a user would consider undoing.\n"
    }
  ]
}
---
Can trigger undo/redo while in edit mode for rich text inline edit

Steps to reproduce:

1\) Open the rich text inline edit example\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>

2\) Open one of the rich text inline edit fields into edit mode, make a change and save it.

3\) Reopen the same rich text inline edit field into edit mode

Note that you can trigger the undo/redo button and the text will undo/redo in edit mode.

        