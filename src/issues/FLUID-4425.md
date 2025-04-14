---json
{
  "title": "FLUID-4425",
  "summary": "Rename Javascript files which are part of demo portal",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-08-31T15:46:17.707-0400",
  "updated": "2014-03-03T12:06:15.130-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-01T15:35:44.250-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-01T15:35:51.596-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/142> merged into project repo at 775660bb181320a2b23dd1d61994bb2f2f88cae2\n"
    }
  ]
}
---
The JS files which are part of the portal are confusingly named. Their names are currently the same as the demo name, which in many cases is the same as a component name. Hence we have for example a file named "uioptions.js" which does not actually contain the UIOptions component but merely the demo for it. This causes confusion when bringing up particular files in an IDE, especially on case-insensitive platforms. Similarly "renderer.js" in demos/renderer/data does not contain the renderer but demonstration data for the renderer.\
I propose a rename to "componentnameDemo.js" for demo files and "componentnameDemoData.js" for data files used in the demos.

        