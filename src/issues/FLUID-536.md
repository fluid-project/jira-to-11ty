---json
{
  "title": "FLUID-536",
  "summary": "Menu Bar Example broken in IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2008-04-25T11:49:09.000-0400",
  "updated": "2009-05-05T09:02:37.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "WinXP IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-05-12T17:17:15.000-0400",
      "body": "Apparently, this shouldn't really be expected to work fully yet. The decision is to move it into the manual tests folder.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-27T14:39:19.000-0400",
      "body": "The example has been moved to the manual tests.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T09:02:37.000-0400",
      "body": "We no longer use the menu bar as an example\n"
    }
  ]
}
---
The Menu Bar example is broken in IE7.

1\. Mouse clicking on a menu item closes the menu and doesn't activate the item. (i.e. clicking "New" closes the File menu instead of popping up a dialog).\
2\. Left-Right cursor keys open File and Edit menus, but Down and Up arrow keys make the menu disappear, but focus is being held on a menu item.

        