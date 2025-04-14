---json
{
  "title": "FLUID-3232",
  "summary": "Hitting back in the browser on a demo page, removes the demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-10-06T14:02:34.000-0400",
  "updated": "2014-03-03T14:21:49.848-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T12:16:21.000-0400",
      "body": "Unfortunately, it's because the demos are in iFrames.\n"
    }
  ]
}
---
Hitting back in the browser on a demo page, removes the demo

Steps to reproduce

1\) Open one of the demo pages from the demo portal\
<http://build.fluidproject.org/infusion/demos/>

2\) After the demo page has loaded, hit the back button in the browser

Notice that the page remains on the demo page but the demo is removed. To get back to the portal you would have to hit back twice.

Hitting back should probably send you to the portal.

        