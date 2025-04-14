---json
{
  "title": "FLUID-4976",
  "summary": "Rename references to \"actionAnts\" to \"enactors\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-04-11T15:10:22.309-0400",
  "updated": "2013-04-29T09:39:45.402-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-04-11T16:19:12.550-0400",
      "body": "Sent pull request: <https://github.com/fluid-project/infusion/pull/312>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-16T16:22:26.763-0400",
      "body": "Merged into project repo at bf6163f74045e99c1a9c29ac4e51214fb5743ad0\n"
    },
    {
      "author": "Cindy Li",
      "date": "2013-04-18T17:04:04.505-0400",
      "body": "The \"enactors\" in the grade name \"fluid.uiOptions.enactors\" should also be renamed to \"enactor\".\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-19T16:26:17.024-0400",
      "body": "Merged <https://github.com/fluid-project/infusion/pull/316> into project repo at 1f2bbbefc881f8141d9eb482b7262495fe16fce1\n"
    }
  ]
}
---
In the refactored UI Enhancer code, all the references to "actionAnts" need to be renamed to "enactors".

        