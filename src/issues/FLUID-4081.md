---json
{
  "title": "FLUID-4081",
  "summary": "Uploader demo not degrading to single-file when JS turned off",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2011-02-18T10:34:58.905-0500",
  "updated": "2011-06-20T15:28:22.334-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "FF 3.6 on Mac OS X\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:45:12.214-0400",
      "body": "the current version of this has buttons to chose which type of uploader is used (concrete, IoC, and IoC with Demands). These buttons likely make the no-js test impossible.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:45:34.198-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-05-26T18:50:52.048-0400",
      "body": "I reviewed and pushed Mike fix at <https://github.com/colinbdclark/infusion/commit/6ec70e256e8e52d8d7f9067a4c549ac039496345>\n"
    }
  ]
}
---
The Uploader demo doesn't include the 'degraded' markup, so doesn't degrade when JS is off.

To reproduce:\
1\) With JS enabled, open the builder demo:\
<http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html>\
Verify that it loads properly\
2\) Turn JS off and reload the page\
You will get a blank screen

        