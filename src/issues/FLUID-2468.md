---json
{
  "title": "FLUID-2468",
  "summary": "Can't click on non-standard text to open the rich text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-02T10:12:32.000-0400",
  "updated": "2014-03-03T14:39:51.974-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 3.2 (Mac OS 10.4)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T09:48:55.614-0500",
      "body": "Does this happen in Simple Inline Edit too? <http://build.fluidproject.org/infusion/demos/inlineEdit/simple/demo.html>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T09:52:08.756-0500",
      "body": "Can not verify if this affects Infusion 1.3 since edit mode is not activated by clicking on editable text. Will need to modify the demo to test this bug.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-07T10:19:53.253-0500",
      "body": "I tried making the text field editable to test this, and I'm completely unable to reproduce it, so we'll call this one fixed as of 1.3.\n"
    }
  ]
}
---
Can't click on non-standard text to open the rich text inline edit

Steps to reproduce:

1\) Open the rich text inline edit example: <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>

2\) Attempt to add in a non-standard unicode character (example here: <http://www.alanwood.net/unicode/miscellaneous_symbols.html> )

3\) After saving the edit, attempt to re-open edit mode by clicking on the non-standard text.

Notice that you are unable to re-open it in edit mode. If you click just to the right of the non-standard text, it will open.

        