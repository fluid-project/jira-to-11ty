---json
{
  "title": "FLUID-3028",
  "summary": "customBuilder should be able to handle the case where a dependency is expressed but not included in the set of modules",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-07-14T11:40:16.000-0400",
  "updated": "2009-08-25T15:14:33.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-14T11:44:24.000-0400",
      "body": "fluid.customBuild.updateItemAndDependencies will no longer attempt to act on dependencies that do not have corresponding modules defined.\n"
    }
  ]
}
---
customBuilder should be able to handle the case where a dependency is expressed but not included in the set of modules.

These should be ignored and not attempted to be acted upon.

        