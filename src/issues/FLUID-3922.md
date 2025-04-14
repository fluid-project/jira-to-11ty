---json
{
  "title": "FLUID-3922",
  "summary": "Top right portlet in third col moves to first col instead of second when 'ctrl-left arrow' used",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2010-12-16T13:52:16.105-0500",
  "updated": "2014-06-05T15:25:20.155-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "winXP, ff 3.6\\\nFF4 (Mac OS 10.6)\\\nIE 8, IE 9, IE 10, IE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
for <http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>

The top right portlet moves to the first col instead of the second when 'ctrl-left arrow' used. Happens with all portlets when in top right position - except for 'survey'. Not sure why it's special.

        