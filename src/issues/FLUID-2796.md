---json
{
  "title": "FLUID-2796",
  "summary": "Can't open a rich text inline edit using the keyboard: using IE 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-05-27T16:02:01.000-0400",
  "updated": "2009-06-02T10:26:39.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 8 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T10:26:38.000-0400",
      "body": "Looks like this issue was fixed with <https://fluidproject.atlassian.net/browse/FLUID-2843#icft=FLUID-2843>\n"
    }
  ]
}
---
Can't open a rich text inline edit using the keyboard

Steps to reproduce:

1\) Open the inline edit quick start example\
<http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/inlineEdit/html/InlineEdit.html>

2\) Tap the 'tab' key until one of the rich text inline edit fields has focus

3\) attempt to open the rich text inline edit field in edit mode by tapping the 'enter' key. notice that it opens and closes immediately.&#x20;

        