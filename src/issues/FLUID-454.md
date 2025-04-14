---json
{
  "title": "FLUID-454",
  "summary": "Reorderer: repeated Ctrl-arrow movement of items requires release/repress of Ctrl key",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T15:38:09.000-0400",
  "updated": "2008-11-13T13:28:04.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-401/",
      "key": "FLUID-401",
      "summary": "In IE 6+, you have to press the arrow key twice when attempting to move an item with the keyboard."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T10:59:14.000-0400",
      "body": "Oddly, if you do keep the Ctrl key held down, the item **will** move if you press the arrow key a second time.\n\nThis incorrect behaviour is NOT present in FF on Win, nor in FF (2 or 3) on Mac.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T14:23:35.000-0400",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-401#icft=FLUID-401>\n"
    }
  ]
}
---
To move items in the sortable to do lists (both styled and unstyled) more than one position up or down, you cannot keep the ctrl key down and hit the arrow a second time (as a user would logically expect). Instead you have to release the Ctrl key and then reapply it in conjunction with the second arrow key press for it to work. This is counterintuitive - fix so control key can be kept down and only multiple presses of arrow key are needed to move list element more than one spot on list.

        