---json
{
  "title": "FLUID-5053",
  "summary": "UIOptions enhancer relay does not work when MyInfusion.js build is used.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-06-13T17:11:00.178-0400",
  "updated": "2013-10-04T09:03:10.603-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-06-14T10:50:09.653-0400",
      "body": "Merged into master at ee706f430116c15a9483093d6bb85b6206471817.\n"
    }
  ]
}
---
When using a custom build of infusion and integrating it in order to use UIOptions, the relay of model changes between the iframe settings panels and the top level document uienhancer does not work.

AFAIK, this happens because the uienhancer relay is defined in uioptions.js file and thus should come before the uienhancer.js in build dependencies.

        