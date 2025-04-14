---json
{
  "title": "FLUID-2450",
  "summary": "Inconsistency in default  text entry location / cursor for rich text editors",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T13:14:24.000-0400",
  "updated": "2017-01-16T09:45:47.696-0500",
  "versions": [
    "1.0",
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
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nIE8 Win 7\\\nFF50.1.0 (Mac OS 10.10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:44:13.735-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T16:05:07.521-0500",
      "body": "Affects Infusion 1.3.\n"
    }
  ]
}
---
When you activate (open) the rich text editor, the cursor position for text entry is inconsistent in TinyMCE and CK Editor.

To reproduce:\
1\. Open Rich text inline edit demo: <http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/rich/>\
2\. Press Edit in the Tiny MCE editor -> notice cursor positioned at END of text.\
3\. Press Edit in CKEditor -> notice cursor positioned at START of text.

        