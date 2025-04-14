---json
{
  "title": "FLUID-3375",
  "summary": "Caret does not appear in textArea for rich text inlineEdit: using Firefox",
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
  "date": "2009-11-09T10:55:29.000-0500",
  "updated": "2014-03-03T14:20:52.121-0500",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF 3.5 (Mac OS 10.6)\\\nFF 2 (Mac OS 10.5, Win XP) \\\nFF 3 (Win7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1957/",
      "key": "FLUID-1957"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3094/",
      "key": "FLUID-3094"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:01:13.281-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T14:27:01.952-0400",
      "body": "I'm not able to reproduce this in the latest version of FF in Mac OS, Win 7 or WinXP. In all these cases, a caret does appear.\n"
    }
  ]
}
---
Caret does not appear in textArea for rich text inlineEdit: using FF 3.5

Steps to Reproduce:

1\) Open the rich text inline edit demo\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>

2\) Click on either the fck or the tinyMCE rich text editors to open it into edit mode.

Notice no caret is placed into the textArea

This bug does not appear in IE8 Win 7.

        