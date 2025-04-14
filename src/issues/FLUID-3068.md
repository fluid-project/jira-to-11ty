---json
{
  "title": "FLUID-3068",
  "summary": "Invitation style for rich inline ediotrs is ignored when used along with the high contrast theme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2009-07-30T11:51:56.000-0400",
  "updated": "2010-05-07T13:52:40.805-0400",
  "versions": [
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:52:40.802-0400",
      "body": "The demo that had this issue is no longer being used\n"
    }
  ]
}
---
When using rich text inline editors with invitation style, it is being ignored if the editor is themed as high contrast. \
To reproduce the bug go to quickstart example for inline edit and notice that for the table with high contrast theme the style doesn't change when hovering over the text that can be edited.

        