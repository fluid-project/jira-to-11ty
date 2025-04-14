---json
{
  "title": "FLUID-6246",
  "summary": "messageResolver missing from demos and examples",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-02-12T15:01:52.624-0500",
  "updated": "2024-07-22T10:35:21.728-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Demos",
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-02-13T09:23:56.461-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/873) has been merged into the project repo master branch at aaeb8e776d4d51beb4fe5162e0308318c355cea7\n"
    }
  ]
}
---
Recent work to split off the fluid.messageResolver into it's own file has forgotten to add the MessageResolver.js dependency into the demos and examples that required it. Those now appear to be broken as fluid.messageResolver cannot be found. 

 

Steps to reproduce:

 

1. Open any of the demos, for example <https://build.fluidproject.org/infusion/demos/uiOptions/>
2. Notice that the tab to open the prefs editor is not functional and that an error, "Uncaught TypeError: fluid.messageResolver is not a function", is thrown.

        