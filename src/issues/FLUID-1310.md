---json
{
  "title": "FLUID-1310",
  "summary": "Tooltip displayed when in edit mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-08-26T11:24:35.000-0400",
  "updated": "2008-11-14T08:56:56.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1310/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1310/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:25:24.000-0400",
      "body": "'screenshot-1' shows the hover message when pointer over an inline edit field\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:26:03.000-0400",
      "body": "'screenshot-2' shows the hover message when the inline edit field is in edit mode\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:59:58.000-0500",
      "body": "Fixed at revision 6034\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-14T08:56:56.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
When the pointer is hovering over an inline edit field, the same message ("Click itemto edit") is displayed whether in or out of edit mode.

Steps to reproduce:

1\) Open either inline edit example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Place the pointer over an inline edit field. Notice the hover message.

3\) Using the mouse click on the inline edit field, to enter edit mode.

4\) Move the pointer away and back over. Notice that the hover message is the same as before

        