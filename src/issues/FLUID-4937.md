---json
{
  "title": "FLUID-4937",
  "summary": "Can't add gradeNames to a component at instantiation",
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
  "date": "2013-03-18T15:17:18.191-0400",
  "updated": "2013-04-29T14:34:50.729-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-03-18T15:25:38.160-0400",
      "body": "I tried out the branch for <https://fluidproject.atlassian.net/browse/FLUID-4921#icft=FLUID-4921> which provides another means of doing this through dynamically applying grades with invokers. However, the method described here still does not work.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-03-19T16:16:33.812-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/271> merged into project repo at 251aff24fcf3e85b84c20d72c9d174858543f6f1\n"
    }
  ]
}
---
gradeNames are part of the options for a component. However, if you attempt to add another gradeName to a component at instantiation time, it is ignored and only the grades that were added in the call to fluid.defaults are applied.

A unit tests demonstrating the issue can be found in my github branch:\
<https://github.com/jobara/infusion/tree/FLUID-4937>

        