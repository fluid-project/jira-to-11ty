---json
{
  "title": "FLUID-4842",
  "summary": "Improve flexibility of framework error handling in fluid.fail",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2012-11-09T13:56:37.480-0500",
  "updated": "2014-03-03T12:36:21.963-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1404/",
      "key": "FLUID-1404"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-01T04:11:43.421-0500",
      "body": "Now in trunk\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T12:36:16.852-0500",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/248> ) was merged into the project repo at 99e40f45638960c207a0ff151e5b8cb49231844d\n"
    }
  ]
}
---
The framework behaviour on fluid.fail is currently mildly configurable by means of the fluid.pushSoftFailure directive which is currently used in a few test cases - but this isn't sufficient to meet the needs of <http://issues.gpii.net/browse/GPII-44> which requires a fully flexible system. We need to extend the fluid.pushSoftFailure system so that it accepts a function handle in addition to a simple boolean flag, which may be used to bridge to arbitary external framework code (such as that in the GPII request-handling framework)

        