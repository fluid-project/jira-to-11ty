---json
{
  "title": "FLUID-3092",
  "summary": "Can't tab or shift-tab out of a rich text inline editor: using safari or FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Escalated",
  "reporter": "Justin Obara",
  "date": "2009-08-12T09:14:31.000-0400",
  "updated": "2014-06-25T16:16:10.867-0400",
  "versions": [
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 4, Safari 3 (Mac OS 10.5), Firefox 2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-08-12T10:54:50.000-0400",
      "body": "This is a known bug in TinyMCE. <https://sourceforge.net/tracker/index.php?func=detail&aid=1657397&group_id=103281&atid=738747>\n"
    }
  ]
}
---
Can't tab or shift-tab out of a rich text inline editor

Steps to reproduce:

1\) Open the inline edit quick start example\
<http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/inlineEdit/html/InlineEdit.html>

2\) Open any of the Rich Text inline editors

3\) attempt to tab or shift-tab out of the editor. Notice that this will either not have any response or add tabs into the text area.

        