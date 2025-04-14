---json
{
  "title": "FLUID-3912",
  "summary": "Extra non-editable empty space at beginning of edit mode in inline edit in IE6 and IE7",
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
  "date": "2010-12-16T10:20:00.163-0500",
  "updated": "2014-06-25T15:55:54.142-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 in Windows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:54.141-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
In edit mode, there's an extra non-editable space preceding editable text.

In view mode, the space disappears and appears as expected.

Fine in IE8 Windows 7

        