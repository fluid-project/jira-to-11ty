---json
{
  "title": "FLUID-1309",
  "summary": "Hover text appears below the table of data, instead of under the pointer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-08-26T11:18:35.000-0400",
  "updated": "2008-08-26T15:50:07.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1309/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:20:12.000-0400",
      "body": "'screenshot-1' shows the hover message at the bottom. The pointer was over the highlighted text.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T15:50:07.000-0400",
      "body": "was fixed as part of revision 5433.\n"
    }
  ]
}
---
Hover text appears below the table of data, instead of under the pointer.

Steps to reproduce:

1\) Open the bSpace example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Place the pointer over top of one of the inline edit fields. Notice that after a couple of seconds the hover message appears below table instead of directly under the pointer.

        