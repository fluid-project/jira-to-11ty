---json
{
  "title": "FLUID-5087",
  "summary": "Add new low contrast themes to UI Options theme panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2013-07-10T16:56:25.267-0400",
  "updated": "2013-07-24T14:47:06.938-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5080/",
      "key": "FLUID-5080",
      "summary": "Create low contrast theme"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-07-11T13:17:49.411-0400",
      "body": "We'll need to ensure that the new themes go through the generateUIOThemes build task. To do this, the importantInjection.json needs to be updated with their paths.\\\n<https://github.com/fluid-project/infusion/blob/master/build-scripts/importantInjection.json>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-07-24T14:46:23.257-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/370> ) into the project repo at 4ac2053169e7b7bffab40f72f5a62cf70c0f10f1\n"
    }
  ]
}
---
Add the new low contrast themes to UIO.

        