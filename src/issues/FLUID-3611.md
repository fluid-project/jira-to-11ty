---json
{
  "title": "FLUID-3611",
  "summary": "Text persists in edit mode when view mode displays default text",
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
  "date": "2010-04-06T14:14:35.000-0400",
  "updated": "2014-07-14T10:07:04.946-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit",
    "Undo"
  ],
  "environment": "IE 6 (Win XP)\\\nIE 8, FF3.6 (Win 7)\\\nSafari 5, FF 4 (Mac OS 10.6)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4070/",
      "key": "FLUID-4070"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T14:31:25.643-0500",
      "body": "Tested in Win7, occurs in both IE8 and FF3.6.\n"
    }
  ]
}
---
Text persists in edit mode when view mode displays default text

Steps to reproduce

1\) Open the Rich Text inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>

2\) Open the CKEditor example into edit mode.&#x20;

3\) Make an edit to the text and save

4\) Reopen in edit mode and delete all of the text and save

5\) Undo the change and redo it.

6\) Open in edit mode again, notice that all of the text appears in edit mode, even though the view mode was showing the default text.

        