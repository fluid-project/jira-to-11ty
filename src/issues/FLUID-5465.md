---json
{
  "title": "FLUID-5465",
  "summary": "Custom builds include everthing, regardless of specific requests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2014-07-10T11:28:48.956-0400",
  "updated": "2024-07-22T09:33:04.409-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-10T14:21:33.534-0400",
      "body": "My mistake. I was accidentally adding a \"--\" before the \"custom\" target name.\n"
    }
  ]
}
---
Any custom build currently includes everything:full framework, all components, regardless of what was specified as part of the --include="..." option.

        