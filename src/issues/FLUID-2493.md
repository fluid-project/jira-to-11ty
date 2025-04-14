---json
{
  "title": "FLUID-2493",
  "summary": "No tooltip on hover for rich text inline edit FCK",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2009-04-02T16:41:30.000-0400",
  "updated": "2011-01-07T13:19:03.386-0500",
  "versions": [
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
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-04-15T16:33:01.000-0400",
      "body": "FCK Editor is now deprecated. However new CKEditor still has the same problem.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T13:19:03.385-0500",
      "body": "Fixed with Infusion 1.3. Tested with IE8, IE6, and FF3.6.\n"
    }
  ]
}
---
Hovering over a rich text inline edit FCK doesn't show the "Click item to edit" tooltip.

        