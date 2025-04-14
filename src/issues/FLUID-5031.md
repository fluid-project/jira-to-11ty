---json
{
  "title": "FLUID-5031",
  "summary": "i18n.js not included as dependency for UIO",
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
  "date": "2013-06-03T15:32:11.258-0400",
  "updated": "2013-08-16T10:56:17.208-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-04T08:29:36.728-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/335> ) which adds i18n.js to UIO's dependency file.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-06-04T10:35:53.433-0400",
      "body": "Merged into project repo at c3c88cd965e8804b678dd309aedd9cc603d4ce16\n"
    }
  ]
}
---
The new UIO JavaScript file "i18n.js" is not mentioned in the dependencies JSON file, so it's not included in builds of MyInfusion.js

        