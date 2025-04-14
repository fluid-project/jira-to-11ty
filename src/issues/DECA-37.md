---json
{
  "title": "DECA-37",
  "summary": "Decapod Image Reorderer: Item focus could be causing odd scrollbar behaviour",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-03-05T09:36:44.000-0500",
  "updated": "2012-01-10T09:52:43.847-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture"
  ],
  "environment": "Windows 7, WinXP, seems fine in Linux?\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-03-05T09:37:10.000-0500",
      "body": "I am using rev 9569 from the repository and I'm experiencing some odd behaviour with the vertical scroll bar on the reorderer grid.\n\nIn Firefox 3.6 - Windows 7:\n\n* can't scroll up or down using the up and down arrows on scroll bar. Clicking the buttons appears to have no effect.\n* clicking on negative space on scroll bar does not \"jump\" to a position. The view stays in place.\n* can drag the scrollbar up and down as expected\n\nIn IE8 - Windows 7: (I know we're not supporting IE8, but it provides some clues).\n\n* clicking on negative space on scroll bar jumps the scrollbar but then snaps it back to the item in focus.\n* clicking scroll up and down arrow buttons on scrollbar scrolls up/down a few lines, but then snaps back to item in focus.\n* can drag the scrollbar up and down as expected (no snapping to focused item).\n\nI think somehow having the item in focus is forcing the scrollbar to keep its position regardless of what the user tries to do. I think the correct behaviour would be to allow the user to reposition the view using the scrollbar regardless of what is in focus.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-03-05T09:37:26.000-0500",
      "body": "In Linux the scrollbar works as expected in both Firefox 3.6 and Chrome 5. In Windows XP, FF 3.6 arrows and dragging work as expected. However, clicking on negative space does not jump to a position. I also guess it has something to do with the item in focus. We should probably address this in the bug parade.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-04-20T10:24:47.000-0400",
      "body": "Does not appear to affect ubuntu versions of browsers.\n"
    }
  ]
}
---
Unable to use the vertical scrollbar in an expected manner in Windows 7 IE8 and FF3.6. Clicking the negative scrollbar space snaps back to original position, arrow keys do not work, etc.

May be fine in Linux and WinXP. See comments for additional information.

        