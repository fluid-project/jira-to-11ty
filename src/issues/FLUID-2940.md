---json
{
  "title": "FLUID-2940",
  "summary": "fluid.moduleLayout = fluid.moduleLayout || {}; is in the wrong location in moduleLayout.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-06-11T11:35:54.000-0400",
  "updated": "2009-08-06T13:36:51.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-11T12:01:42.000-0400",
      "body": "Moved fluid.moduleLayout = fluid.moduleLayout || {}; inside of the closure\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-05T07:05:47.000-0400",
      "body": "Committed to branch for 1.1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-05T08:16:48.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-06T13:36:51.000-0400",
      "body": "The back porting into the 1.1.x branch appears to be the same as in trunk.\n\nTested using:\n\nFF3, FF3.5 (Mac OS 10.5)\\\nIE 7 (Win Vista)\n"
    }
  ]
}
---
fluid.moduleLayout = fluid.moduleLayout || {};

should be inside the closure in moduleLayout.js

        