---json
{
  "title": "FLUID-5917",
  "summary": "Make Fluid's CI server run Infusion tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Avtar Gill",
  "reporter": "Avtar Gill",
  "date": "2016-06-15T15:07:34.522-0400",
  "updated": "2024-07-22T10:35:24.317-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-13T15:18:49.756-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/720> ) into the project repo 3f0f30fdf165b77b1d834d26f0a9abd756e9f93b. This add TAP reporting.\n"
    }
  ]
}
---
[As described](http://lists.idrc.ocad.ca/pipermail/fluid-work/2016-May/009971.html) on the fluid-work mailing list [Infusion's CI job](https://github.com/fluid-project/ci-service/blob/master/jenkins_jobs/fluid-infusion.yml) does not currently run any tests after a build is generated. This should change now that we have a mechanism for running Fluid jobs on CI build nodes also used by other projects.&#x20;

        