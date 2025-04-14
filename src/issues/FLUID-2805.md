---json
{
  "title": "FLUID-2805",
  "summary": "Pager drop down value doesn't refresh with page: using IE 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-05-28T11:40:20.000-0400",
  "updated": "2014-06-25T16:01:17.703-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "IE8 (WinXP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:17.696-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
To reproduce this bug:

Go to <http://build.fluidproject.org/infusion/standalone-demos/pager/html/pager-render.html>

1\) Note that the page shows 10 items and that the 'per page' drop down shows 10

2\) change the per page drop down to 5 and note that there are now 5 items per page

3\) refresh the page

The page refreshes to 10 items, but the drop down still shows 5 items per page.

        