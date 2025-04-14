---json
{
  "title": "FLUID-2497",
  "summary": "Difficult to move anything to the top of the dynamic reoderer example using the mouse",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-03T09:49:10.000-0400",
  "updated": "2014-07-09T10:09:54.955-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF4 (Mac OS 10.6)\\\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T14:41:56.000-0400",
      "body": "You can add items to the top with the mouse, if you drop them above the button\n"
    }
  ]
}
---
Difficult to move anything to the top of the dynamic reoderer example using the mouse

Steps to reproduce:

1\) Open the dynamic reorderer manual test

2\) Attempt to drag an item to the top, using the mouse

Notice that it will only go up to the second position. This is the same if you add more items dynamically.

        