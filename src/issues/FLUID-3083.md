---json
{
  "title": "FLUID-3083",
  "summary": "focus not placed on undo/redo after leaving edit mode for Rich Text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2009-08-10T14:17:12.000-0400",
  "updated": "2017-01-19T09:21:28.106-0500",
  "versions": [
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
  "environment": "FF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nFF4 (Mac OS 10.6)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE 8, IE 9, IE 10, IE 11 (Win Vista, Win 7)\\\nIE6 (Win 2000)\\\nChrome 55 (macOS 10.12)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2516/",
      "key": "FLUID-2516",
      "summary": "Focus does not remain on a rich text inline edit field, after it is closed"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:50:41.882-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-12-22T10:52:33.292-0500",
      "body": "in FF4 on Mac OS 10.6 focus moves downward, but pressing Shift+Tab once does move to the undo/redo, but there is no focus shown in styling.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T14:56:25.491-0500",
      "body": "To elaborate on Jess' comment.\n\nPressing Tab after saving changes to Tiny MCE editor puts focus on the Edit link on CK Editor.\\\nPressing Tab after saving changes to CK Editor places focus on the browser's location bar.\\\nIn all cases the Undo / Redo links never get focus.\\\nThere is no style when putting focus on Undo/Redo links.\n\nTested Infusion 1.3, FF3.6 Win7\n"
    }
  ]
}
---
focus not placed on undo/redo after leaving edit mode for Rich Text inline editfocus not placed on undo/redo after leaving edit mode for Rich Text inline edit

Steps to reproduce:

1\) Open the inline edit quick start example\
<http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/rich/>

2\) Open one of the rich text inline edit fields and make a change.

3\) Save the change.&#x20;

Notice that the focus is not placed on the undo/redo button, but at the top of the page.

        