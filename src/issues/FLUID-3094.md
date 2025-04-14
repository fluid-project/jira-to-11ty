---json
{
  "title": "FLUID-3094",
  "summary": "Reopening an FCK editor does not place the caret in the text area",
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
  "date": "2009-08-12T12:39:21.000-0400",
  "updated": "2014-07-11T15:09:18.260-0400",
  "versions": [
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3 (Mac OS 10.5, WIn Vista, Win7)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3375/",
      "key": "FLUID-3375",
      "summary": "Caret does not appear in textArea for rich text inlineEdit: using Firefox"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2515/",
      "key": "FLUID-2515"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:48:13.048-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T15:09:18.259-0400",
      "body": "We are now using CKEditor 3 and Firefox is up to version 30. The issue could have been fixed with either of those.\n"
    }
  ]
}
---
Reopening an FCK editor does not place the caret in the text area

Steps to reproduce:

1\) Open the Inline Edit quick start example\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>

2\) Open one of the Rich Text inline editors that uses FCK editor

3\) make a change and save it.

4\) Reopen the same editor and notice that the caret is not in the text area

        