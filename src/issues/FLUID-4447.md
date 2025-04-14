---json
{
  "title": "FLUID-4447",
  "summary": "File queue doesn't scroll in IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2011-09-13T14:10:12.060-0400",
  "updated": "2014-06-25T15:55:52.959-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, Win XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:52.954-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
Add a bunch of files to the file queue - instead of reaching a max height and scrolling it just continues to grow in size and gets really long. Still functional but possibly hazardous for the implementer as it could break the layout of a page.

        