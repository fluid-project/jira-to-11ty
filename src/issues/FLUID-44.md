---json
{
  "title": "FLUID-44",
  "summary": "Dragging while CTRL-key down: dragging styles don't clear when CTRL released",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2007-10-04T15:54:18.000-0400",
  "updated": "2008-09-30T11:11:29.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6/",
      "key": "FLUID-6",
      "summary": "Ctrl and Shift Cause Problems in Mouse Interaction"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-44/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-04T15:55:33.000-0400",
      "body": "These issues might be related - the strange behaviour observed in <https://fluidproject.atlassian.net/browse/FLUID-6#icft=FLUID-6> might actually be <https://fluidproject.atlassian.net/browse/FLUID-44#icft=FLUID-44>, and not related to dojo's copy functionality.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T17:39:31.000-0400",
      "body": "To see this behaviour on windows, in step 3 you must drag and drop an item that has not already been selected.&#x20;\n\nThe behaviour on the Mac is slightly different in that ctrl-mouse click brings up the context menu which interferes with the drag. When the context menu is dismissed the styling remains in an incorrect state.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-27T14:43:48.000-0500",
      "body": "Moving to the next release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-13T13:25:57.000-0400",
      "body": "updated the Browsers that this issue affects\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-18T01:49:19.000-0400",
      "body": "I am not able to reproduce this issue currently (FF2 Windows), it may have been fixed in the recent reworking. Please reverify, thanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:50:15.000-0400",
      "body": "'screenshot-1' shows the focus styling styll applied to the Dragonfruit even though the Kiwano is being dragged\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:50:38.000-0400",
      "body": "Can still reproduce issue, also added a screenshot\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:54:16.000-0400",
      "body": "Here are some steps to reproduce:\n\n1\\) tab to an image in the lightbox\n\n2\\) press and hold the ctrl key. While doing that click in some whitespace on the screen\n\n3\\) release the ctrl key. Notice that the focus styling remains on the image\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-18T13:41:35.000-0400",
      "body": "Fixed at revision 5587\n"
    }
  ]
}
---
1\) Tab to the orderables to select an item\
2\) Press and hold the CTRL key\
3\) With the CTRL-key held down, drag and drop something with the mouse (either the item that had been selected or something else)\
4\) Release the CTRL key

The 'dragging' styles that had been applied upon CTRL-key down are not removed.

        