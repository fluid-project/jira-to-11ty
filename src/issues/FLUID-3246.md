---json
{
  "title": "FLUID-3246",
  "summary": "Dropdown inline edit: 'selected item' styling and keyboard selection not in sync",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2009-10-07T10:15:20.000-0400",
  "updated": "2016-11-15T17:15:50.344-0500",
  "versions": [
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
    "Inline Edit"
  ],
  "environment": "Chrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nIE 11 (Win 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3246/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-03T07:46:44.538-0400",
      "body": "This also happens with the mouse, but is okay after changing the selection.\n"
    }
  ]
}
---
When using keyboard to interact with dropdown inline edit, pressing down to navigate the dropdown starts at the top of the list, not where the item is selected.

To reproduce: <http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/dropdown/>

1\. Load dropdown inline edit manual test.\
2\. Keyboard focus the inline editable field.\
3\. Enter to activate.\
4\. Press down arrow.\
5\. Notice that Enchiridion is highlighted and not Exomologesis.

        