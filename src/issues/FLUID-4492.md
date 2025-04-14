---json
{
  "title": "FLUID-4492",
  "summary": "Comic Sans adds scrollbar to header area in demo - use fl-clearfix instead",
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
  "date": "2011-10-03T12:50:34.311-0400",
  "updated": "2013-10-04T09:47:04.734-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "FF6, Mac 10.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-04T09:47:04.732-0400",
      "body": "No longer have header on full with preview demo.\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptionsFullWithPreview.html>

Change font style to comic-sans, scroll all the way to the right. \
Note scrollbar on side of header - change fl-fix to fl-clearfix on this div

        