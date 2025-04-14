---json
{
  "title": "FLUID-829",
  "summary": "IE: Arrow keys in menubar example don't properly expand menu",
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
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-26T17:11:43.000-0400",
  "updated": "2009-05-05T09:08:26.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "IE6 & IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T09:08:26.000-0400",
      "body": "We no longer use the menu bar example\n"
    }
  ]
}
---
To reproduce:\
<http://build.fluidproject.org/fluid/tests/jquery-tests/manual/menubar/MenuBarExample.html>

1\) Click in the whitespace somewhere, then press Tab once.

* Focus **will** be on the File menu, even though you can't see it\
  2\) Press the down arrow once.
* The menu should appear, with focus on the first item
* Focus is, in fact, on the first item, but the three menu items are not displayed\
  3\) Press the down arrow a second time.
* Focus should move down to the second item in the menu, but it doesn't - it's still on the 1st item

Other information:

At this point, pressing the left and right arrows will successfully move focus to the adjacent menu, and will display it, but subsequent up/down will cause that menu to disappear.

        