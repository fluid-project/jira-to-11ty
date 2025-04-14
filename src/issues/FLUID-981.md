---json
{
  "title": "FLUID-981",
  "summary": "Can pick up JQuery Tab  without the pointer changing style",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-07-22T18:59:17.000-0400",
  "updated": "2010-03-26T15:41:49.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-981/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-02T11:18:07.000-0400",
      "body": "'screenshot-1' shows the incorrect pointer style\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T10:29:58.000-0400",
      "body": "Patch in fluid 987 fixes this problem\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-03T09:55:14.000-0500",
      "body": "The description may have been a little unclear. The problem here is that you are able to place the mouse over the tab and perform actions, such as DnD, without the pointer changing to a hand. As soon as the pointer is placed over top of the tab, it should change from an arrow to a hand.&#x20;\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-12-17T17:29:57.000-0500",
      "body": "Observed in WIN FF3, IE7, IE6  OSX FF2 - mouseover does not change cursor to cross or hand..the cross only appears on a very narrow area a few pixels high.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T15:40:58.000-0400",
      "body": "Demo no longer exists\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T15:41:49.000-0400",
      "body": "Demo has been succeeded Demo portal examples\n"
    }
  ]
}
---
When hovering over a JQuery Tab, a border is placed around the Tab. You are able to grab the item near the top border without the pointer changing from an arrow to a hand.

Steps to reproduce:

1\) Open the Sortable JQuery Tabs example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) Place the pointer over a Tab, near the top border. Notice that you can pick up the the avatar without the pointer  changing style.

        