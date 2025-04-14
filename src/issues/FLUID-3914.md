---json
{
  "title": "FLUID-3914",
  "summary": "Elements shift when editing text in simple inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-12-16T10:34:21.395-0500",
  "updated": "2024-07-22T13:50:29.051-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6 and IE7 in Windows XP\\\nIE8, IE 11 Windows 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T10:38:50.195-0500",
      "body": "Affects IE8 too but in an opposite manner.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T13:50:28.911-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
In IE 6 and 7, entering Edit mode shifts elements down one pixel.\
In IE8, the opposite is true - entering Edit mode shifts elements UP one pixel.

        