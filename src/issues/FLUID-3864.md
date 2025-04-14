---json
{
  "title": "FLUID-3864",
  "summary": "Layout reorderer failed to move portlets back to the first column in three-columns view with keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Harris Wong",
  "date": "2010-11-26T11:50:50.190-0500",
  "updated": "2016-07-08T10:04:55.837-0400",
  "versions": [
    "1.1.3",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "WinXP 2002 SP3, FF 3.6.12, IE 8, Chrome, Opera\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3089/",
      "key": "FLUID-3089",
      "summary": "If columns become stacked, can't drag item into lower column"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3864/ss01.png",
      "filename": "ss01.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3864/ss02.png",
      "filename": "ss02.png"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2010-11-26T11:52:19.886-0500",
      "body": "Screenshots: ss01.png. ss02.png. ss03.png.&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2010-11-26T11:52:40.913-0500",
      "body": "Screenshot ss04.png\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-26T13:24:13.479-0500",
      "body": "May relate to <https://fluidproject.atlassian.net/browse/FLUID-3089#icft=FLUID-3089> as it may be that the columns are stacking.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:01:27.624-0400",
      "body": "I tried this again today. I am able to put items into the first column only if i'm trying to move an item ( from left to right ) to where the locked portlet in the middle column is. This is likely because it pushes the item to the next closes valid drop target to the left of itself.  However, I can not directly move items to the empty column.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:04:55.837-0400",
      "body": "Updated screenshots. The originals were all broken. I added new ones and updated the description.\n"
    }
  ]
}
---
In a 3-columns view layout reorderer (ss01.png), once all the portlets are moved to the other column(s) from the first column, the first column will disappear and you can never move portlets back to the first column with keyboard.

You can reproduce this in the newest layout reorderer demo (infusion/src/webapp/demos/reorderer/layoutReorderer/html/layoutReorderer.html).  To reproduce, open infusion/src/webapp/demos/reorderer/layoutReorderer/html/layoutReorderer.html, and change line 44 "demoSelector-layoutReorderer-locked demo-layoutReorderer-locked" to "demo-layoutReorderer-module".  This will unlock the first portlet from the first column.  Now, move all the portlets from the first column to the right by using the keyboard (ctrl-right arrow).  You will notice the first column disappears and you can not move the portlets back to it anymore (ss02.png). &#x20;

I am not sure if this is a CSS problem or a bug in the reorderer.  One thing to note is that as long as the column is "visible", then it's fine.

This fails on FF 3.6.12, IE8, Chrome and Opera; but works fine on IE 7.

        