---json
{
  "title": "FLUID-227",
  "summary": "Reorganize the Fluid SVN",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-02-11T12:36:01.000-0500",
  "updated": "2008-03-05T14:51:51.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-231/",
      "key": "FLUID-231"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-02-13T11:33:45.000-0500",
      "body": "Once SVn has been re-arranged, the ant build script should be modified to not use the ${build} directory. Instead ant script should minify and output directly to ${dist}.\n"
    }
  ]
}
---

        