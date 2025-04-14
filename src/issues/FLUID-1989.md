---json
{
  "title": "FLUID-1989",
  "summary": "empty editable text field not greyed out",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2008-12-16T13:08:24.000-0500",
  "updated": "2011-01-14T09:53:25.675-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T12:08:34.000-0400",
      "body": "The \"Click here to edit\" invitation text should be greyed out. Right now it is displayed as inline text is.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T15:03:13.915-0500",
      "body": "This has been fixed in Infusion 1.3\n"
    }
  ]
}
---
An empty editable text field is supposed to be greyed out and to contain the text "click here to edit". While the required text is present it is not greyed out.

        