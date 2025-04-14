---json
{
  "title": "FLUID-3606",
  "summary": "Can't tab out of edit with rich text inline edit using Tiny MCE (Safari 4&5/OS X 10.5)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "James Yoon",
  "date": "2010-04-06T11:24:27.000-0400",
  "updated": "2011-03-01T12:42:45.872-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 4/OS X 10.5, 10.6\\\nSafari 5/OS X 10.6\\\nChrome 4/XP\\\nChrome9/XP\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3632/",
      "key": "FLUID-3632",
      "summary": "Webkit browsers does not allow tabbing out of tinyMCE editor's edit field."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:10:20.305-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T16:05:09.358-0500",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-3632#icft=FLUID-3632>\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-28T12:25:59.626-0500",
      "body": "Can't tab out of edit with rich text inline edit using Tiny MCE exist with Chrome 9 on XP.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-02-28T12:27:16.768-0500",
      "body": "This issue exist with Chrome 9/XP.\n"
    }
  ]
}
---
Tabbing adds a tab to the editable field--can't get out of edit mode with the keyboard.

Issue does not exist when using CKEditor 3. FF 3.6/XP and IE 8/XP are not affected.

        