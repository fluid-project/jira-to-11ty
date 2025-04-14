---json
{
  "title": "FLUID-21",
  "summary": "In IE6 and IE7, clicking on white space in the Lightbox component causes an error.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Jonathan Hung",
  "date": "2007-06-29T10:35:29.000-0400",
  "updated": "2007-10-22T17:46:20.000-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Windows XP SP2, IE6 and IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T17:46:20.000-0400",
      "body": "This has likely been fixed in the move to jQuery UI's drag and drop.\n"
    }
  ]
}
---
Clicking on the white space in the Lightbox component div causes an error in IE6 and 7.

"Line: 323\
Char: 11\
Error: Object doesn't support this property of method\
Code: 0"

        