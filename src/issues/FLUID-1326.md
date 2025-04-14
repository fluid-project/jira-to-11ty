---json
{
  "title": "FLUID-1326",
  "summary": "inline edit  - cursor at beginning",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-08-27T14:40:02.000-0400",
  "updated": "2008-11-10T08:45:29.000-0500",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3 OSX10.4, Opera 9.6 (win xp)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1742/",
      "key": "FLUID-1742"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-10-30T14:35:03.000-0400",
      "body": "Cursor appears at end Saf 1.3, FF2, FF3 (OSX) - but appears in beginning in Opera\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T15:57:05.000-0500",
      "body": "Fixed at revision 5979\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T08:45:29.000-0500",
      "body": "Verified using:\n\nFF3 OSX 10.5 \\\nOpera 9.5 (win xp)\n"
    }
  ]
}
---
According to test plan\
\------------
Test 3: Mouse, Activate Inline Edit Field

Procedure\
Complete Test 2\
Using the mouse, click on the inline editable text\
Expected Results\
The inline editable text should change into an editable text field containing the current content\
The pointer should be an i-bar\
The caret should appear at the end of the current text\
\------------
\*\*\*  It is placed at the beginning

        