---json
{
  "title": "FLUID-3406",
  "summary": "check ant script minification order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-04T09:21:49.000-0500",
  "updated": "2009-12-08T15:25:36.000-0500",
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
      "author": "Colin Clark",
      "date": "2009-12-04T18:01:46.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T10:34:54.000-0500",
      "body": "clarified that copyToScrBundle target performs the concatination of the files and copyToDeployBundle target calls minifyBuild.\\\ncopyToSrcBundle is performed before copyToDeploy bundle in the customBuild target.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T16:15:43.000-0500",
      "body": "Nothing required here\n"
    }
  ]
}
---
Ensure that the ant build does the minification and concatination in that specific order. This would effectively reduce the duplication of the minification step.\
If it does not, then edit the ant script to fix this.

        