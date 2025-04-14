---json
{
  "title": "FLUID-2356",
  "summary": "Buttons overlap in simplified layout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-03-17T09:21:49.000-0400",
  "updated": "2011-02-28T16:45:15.527-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "FSS"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2356/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T09:23:36.000-0400",
      "body": "'screenshot-1' shows the buttons overlapping in simplified layout\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:10:11.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-05-25T14:45:19.000-0400",
      "body": "Checked on Windows XP, IE8, FF3, Opera. Very small change in the fss code. This looks fine.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:15.525-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Buttons overlap in simplified layout

Steps to reproduce

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Open the UI Options dialog

3\) Change to the simplified layout and save changes

4\) Scroll to the bottom and the screen and notice that the "Add Widgets" and "Edit Appearance" buttons overlap

        