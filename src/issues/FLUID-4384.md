---json
{
  "title": "FLUID-4384",
  "summary": "textControl options shouldn't be top-level UIO options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-07-29T13:27:14.583-0400",
  "updated": "2011-10-14T16:09:51.907-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4353/",
      "key": "FLUID-4353",
      "summary": "UIO: Enable the configuration of UI options, UI Enhancer and template paths as top-level options"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-26T15:29:58.866-0400",
      "body": "This issue has been resolved: these two options are no longer available as top-level options of UIOptions.\n"
    }
  ]
}
---
The UIOptions component itself has two top-level options, textSize and lineSpacing, for setting the min and max values of the relevant sliders. These sliders are actually part of the UIO textControls subcomponent, so these options should be moved there. They were placed at the top level to make configuration easier, but the work on FLUID-4353 makes this unnecessary, and odd.

Bug Parade Infusion

        