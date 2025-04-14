---json
{
  "title": "FLUID-1782",
  "summary": "The undo/redo button overlaps the text, in display mode, when the text is too long to be displayed on a single line",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-11-10T09:00:04.000-0500",
  "updated": "2011-01-06T12:55:57.533-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1782/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-10T09:00:36.000-0500",
      "body": "'screenshot-1' shows the undo button over top of the text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-14T10:36:30.000-0500",
      "body": "The undo button has been moved to the far right, so this issue happens less frequently and with less obstruction\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T12:55:57.500-0500",
      "body": "Does not appear to be an issue with V1.3 of Inline Edit.\n"
    }
  ]
}
---
The undo/redo button overlaps the text, in display mode, when the text is too long to be displayed on a single line

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit the text in one of the inline edit fields with some long text that will be on two lines when in display mode

Notice that the undo button is displayed over top of the text on the first line.

        