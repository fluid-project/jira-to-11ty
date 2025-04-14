---json
{
  "title": "FLUID-4908",
  "summary": "Make sure that UIEnhancer is broken down into a collection of independent actionAnts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "y z",
  "date": "2013-01-18T15:18:19.941-0500",
  "updated": "2013-04-03T08:47:58.009-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-04-03T08:47:36.658-0400",
      "body": "Merged into master @ commit# a1f2cc15adf3da17ec95cfaf92218d766f28d7de\n"
    }
  ]
}
---
UI Enhancer is already well modularized however every module within the UI Enhancer needs to be converted into using the upcoming actionAnts grade.

UIOptions builder will generate demands (or something of that matter) for the particular implementations of an actionAnt.

This will, hopefully, let us avoid having the UI Enhancer component in the first place.

        