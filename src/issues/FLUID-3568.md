---json
{
  "title": "FLUID-3568",
  "summary": "Keyboard reordering requires two keystrokes to commence move action",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2010-03-30T15:21:19.000-0400",
  "updated": "2014-07-14T09:58:12.921-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Ubuntu 9.10, Firefox 3.5.3\\\nUbuntu 10.04, Firefox 3.6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3288/",
      "key": "FLUID-3288",
      "summary": "Moving an item with the keyboard \"loses\" the \"ctrl-key is down\" status"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-54/",
      "key": "DECA-54"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T15:41:35.157-0500",
      "body": "Does not appear to be the same issue as <https://fluidproject.atlassian.net/browse/FLUID-3288#icft=FLUID-3288>. The problem persists although <https://fluidproject.atlassian.net/browse/FLUID-3288#icft=FLUID-3288> appears to be fixed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T15:42:24.190-0500",
      "body": "Retested in FF3.6 on Ubuntu 10.04.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-07-14T09:58:08.360-0400",
      "body": "Tested in Ubuntu 12.04 FF 17 on Image and List Reorderer, no longer seems to be a problem.\n"
    }
  ]
}
---
After pressing the CTRL key, pressing a cursor key does not move the selected item. A second key press is required to move it in the direction you want.

To reproduce:

* select a thumbnail
* depress CTRL (style doesn't change to indicate a move)
* press an arrow key (style changes to indicate a move action is about to occur)
* press an arrow key again (item moved to desired location).

        