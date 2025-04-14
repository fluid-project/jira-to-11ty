---json
{
  "title": "FLUID-4313",
  "summary": "Activation hightlighting is visible on the desktop but not the on the mobile device",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2011-06-28T13:49:01.895-0400",
  "updated": "2015-06-26T10:00:35.688-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Mobile FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.940-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:52.996-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the Mobile FSS demo:\
<http://build.fluidproject.org/infusion/demos/fss/mobile/html/mobile.html>

2\) Click one of the list menu items.

If you performed this on the desktop you will see the background change to blue. On the mobile device (e.g. iPhone, iPod, etc.) you get no activation indication.&#x20;

        