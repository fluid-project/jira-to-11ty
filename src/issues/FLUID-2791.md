---json
{
  "title": "FLUID-2791",
  "summary": "undo and redo point at the same rich text content after opening new text in edit mode and canceling",
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
  "date": "2009-05-27T15:00:16.000-0400",
  "updated": "2024-07-22T12:14:15.494-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit",
    "Undo"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nFF3.6, IE8, IE9, IE10, IE11 (Win 7)\\\nChrome 55 (macOS 10.12)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-22T12:14:15.357-0400",
      "body": "Was not able to reproduce in FF 128\n"
    }
  ]
}
---
undo and redo point at the same rich text content after opening new text in edit mode and canceling

Steps to reproduce:

1\) Open the inline edit quick start example\
<http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/rich/>

2\) Open one of the rich text inline edit fields into edit mode

3\) Change the content and save the change

4\) Re-open the field into edit mode and cancel

Notice that hitting undo and redo displays the same content.

        