---json
{
  "title": "FLUID-3654",
  "summary": "Implement a debug/dev mode so that mFSS can be viewed in FF3.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-04-30T16:51:28.000-0400",
  "updated": "2014-04-02T16:40:51.941-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:40:51.940-0400",
      "body": "FSS is deprecated\n"
    }
  ]
}
---
FF 3.6 supports the same CSS 3.6 properties that webkit browsers do, albeit with different vendor prefixes. We should incorporate a debug/dev mode so that during development the pages with android and iphone themes can be viewed properly in FF 3.6

The start of this work can be found in the incubator in a css file contributed by Mark McLaren

<https://source.fluidproject.org/svn/incubator/mfss_firefox/infusion-branch/src/webapp/framework/fss/css/fss-mobile-theme-firefox.css>

        