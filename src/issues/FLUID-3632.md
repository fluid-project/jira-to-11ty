---json
{
  "title": "FLUID-3632",
  "summary": "Webkit browsers does not allow tabbing out of tinyMCE editor's edit field.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "y z",
  "date": "2010-04-12T16:46:10.000-0400",
  "updated": "2014-04-02T15:23:10.396-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Chrome (WinXP, Win7)\\\nSafari 4 (OS X 10.5, 10.6)\\\nSafari 5 (OS X 10.6)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3606/",
      "key": "FLUID-3606"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-09-23T15:55:55.226-0400",
      "body": "Can't tab through Tiny buttons either (chrome) - if they have shortcuts we should provide an accessible link to a list of kb shortcuts\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:23:10.394-0400",
      "body": "Working fine in latest Safari and Chrome in pre-1.5 testing\n"
    }
  ]
}
---
Chrome 4 and Safari browsers does not allow tabbing out of tinyMCE editor's edit field, instead pressing Tab inserts a tab character into the editor.

Issue does not exist when using CKEditor 3. FF 3.6/XP and IE 8/XP are not affected.

        