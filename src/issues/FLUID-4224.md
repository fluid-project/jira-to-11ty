---json
{
  "title": "FLUID-4224",
  "summary": "Fix broken unit tests for UIOptions, UIEnhancer and Textfield Slider",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-05-11T12:22:56.093-0400",
  "updated": "2011-05-17T12:48:44.247-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-11T13:37:19.332-0400",
      "body": "In IE 6 the UI Options unit tests don't even run. \\\n<http://build.fluidproject.org/infusion/tests/component-tests/uiOptions/html/UIOptions-test.html>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-17T12:48:44.245-0400",
      "body": "Fixed with the merge of <https://fluidproject.atlassian.net/browse/FLUID-4171#icft=FLUID-4171>. The failure of UI Options tests is to be addressed in <https://fluidproject.atlassian.net/browse/FLUID-4234#icft=FLUID-4234>.\n"
    }
  ]
}
---
Broken unit tests:\
◦	UI Enhancer\
◦	UI Options, 3 fail\
◦	text slider - only configure through options

        