---json
{
  "title": "FLUID-403",
  "summary": "Dragging portlets from the left side over portlets on the right displays the avatar belows the portlet's title.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-03-24T14:09:59.000-0400",
  "updated": "2008-09-10T13:45:24.000-0400",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-403/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T15:28:09.000-0400",
      "body": "Possibly a change to the z-index of the avatar style will fix this.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T16:16:06.000-0400",
      "body": "The style has been changed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-04-28T15:04:22.000-0400",
      "body": "Verified fix in IE7 (WinXP), FF2(Mac OS 10.5, WinXP)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-04T19:53:58.000-0400",
      "body": "The bug appears to have returned.\n\nEnvironments:\n\nMac OS X (FF2)\n\nWinXP (FF2, FF3, IE6, IE7)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-02T13:38:38.000-0400",
      "body": "'screenshot-1' shows the avatar for the calendar portlet below the title bar of the my weather portlet\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-10T13:45:23.000-0400",
      "body": "Appears to have been fixed with one of the changes since r5476\n\nVerified using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
When dragging portlets from the left side over portlets on the right, the avatar is displayed behind the titles of the porlets in the right hand column.

Link to site:

<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

        