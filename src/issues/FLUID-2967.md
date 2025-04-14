---json
{
  "title": "FLUID-2967",
  "summary": "Item will drop to the right of an element when it should have dropped at the left.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-06-26T09:51:45.000-0400",
  "updated": "2009-08-07T09:02:15.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1625/",
      "key": "FLUID-1625",
      "summary": "[Image Reorderer] drop target can be left but image drops right"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2967/FLUID-2967.patch",
      "filename": "FLUID-2967.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2967/FLUID-2967-b.patch",
      "filename": "FLUID-2967-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-27T16:12:14.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-04T15:06:21.000-0400",
      "body": "Fundamental error in permuteDom algorithm - fixed with additional test cases\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-04T15:43:55.000-0400",
      "body": "Secondary patch to correct keyboard navigation issue\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-04T16:20:38.000-0400",
      "body": "Fixed and committed to both trunk and the 1.1.1 branch - this was quite a complex issue since there was an error in the underlying fluid.permuteDom algorithm implementation (hidden by a couple of missing test cases), which bug had then been compensated for at a higher level, in particular in the implementation of the gridReorderer. As a result of the bug, the layoutHandler for the gridReorderer was spuriously equivalent to the standard geometricStrategy (which happened to be used also in the layoutReorderer). With this bug fixed, these two implementations may no longer coincide and the gridReorderer needs its own, slightly tweaked, geometric strategy for the perpendicular direction.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-08-06T16:34:07.000-0400",
      "body": "I ran some quick tests and this issues appears to be fixed. I looked at the patch and I can see that Antranig has added a strategy for grid layout handling. Unfortunately I don't know the code base well enough to notice an nuances in this code. I think this needs to be well tested.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-07T09:02:14.000-0400",
      "body": "Tested using:\n\nFF2, FF3, FF3.5, Opera 9.6, Safari 3.2, Safari 4 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n\nAppears to be working properly\n"
    }
  ]
}
---
Item will drop to the right of an element when it should have dropped at the left.

Steps to reproduce:

1\) Open the sortable jQuery UI Tabs example\
<http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/jquery-tabs.html>

2\) Using the mouse drag a tab over one of the middle tabs

3\) Place it as far to the right as possible, without the drop target moving from the desired location

4\) Notice that when you drop the avatar, it will be inserted one place to the right of where it should have dropped.

        