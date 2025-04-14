---json
{
  "title": "FLUID-4067",
  "summary": "Rich Text Inline Edit - No focus styling on Edit link (IE7)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-02-16T11:09:58.510-0500",
  "updated": "2014-04-02T15:50:29.896-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE 7 Win XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-22T10:58:56.862-0500",
      "body": "This is the same for the undo/redo links\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:31:16.791-0400",
      "body": "As of 1.4, I tested this in all IEs, FF6 on Win 7, FF6 on Win XP and FF7 on Mac OSX: I only see this problem in IE7.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:50:29.895-0400",
      "body": "We're not supporting IE1.7 for 1.5\n"
    }
  ]
}
---
There is no focus styling for the Edit link which makes it confusing for keyboard interaction.

To reproduce.

* Load <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>
* Tab to the first Edit link.
* Notice that tooltip appears, but edit link does not visibly change.

        