---json
{
  "title": "FLUID-2515",
  "summary": "Using the keyboard, unable to reach the text area of an fck editor after closing the inline edit: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-04T09:04:26.000-0400",
  "updated": "2009-08-13T12:58:10.000-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3094/",
      "key": "FLUID-3094",
      "summary": "Reopening an FCK editor does not place the caret in the text area"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T08:58:51.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-13T12:58:10.000-0400",
      "body": "Browser support for Infusion 1.2 ( <http://wiki.fluidproject.org/display/fluid/Prior+Browser+Support> ) does not include Opera 9.6 for Mac OS\n"
    }
  ]
}
---
Using the keyboard, unable to reach the text area of an fck editor after closing the inline edit

Steps to reproduce:

1\) Open the rich text inline edit&#x20;

2\) Using the keyboard open one of the fck editor rich text inline edit fields

3\) Using the keyboard tab to either the "Save" or "Cancel" buttons and use it to close the editor.

4\) Using the keyboard, navigate back to the same inline edit field and reopen it.

Notice that you are unable to use the keyboard to get to the text area of the fck editor. You can only tab to the "Save" and "Close" buttons and to other fields on the page.

        