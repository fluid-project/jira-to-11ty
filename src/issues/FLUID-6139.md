---json
{
  "title": "FLUID-6139",
  "summary": "Add code coverage and run browser tests as part of \"npm test\"...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-03-01T08:03:13.612-0500",
  "updated": "2024-07-22T09:15:50.172-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6140/",
      "key": "FLUID-6140",
      "summary": "Infusion self-deduping fails when infusion appears as a dependency of a tool used by infusion"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-03-01T08:50:31.425-0500",
      "body": "@@Antranig Basman, predictably, I am having problems using gpii-testem as a dev dependency.  the \"fluid.require\" within that package fails with the old \"dedupe\" warning.  I am hoping there is some way around this other than moving gpii-testem into the new monorepo concept.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-03-10T10:09:30.610-0500",
      "body": "@@Antranig Basman, the PR with your dedupe fix and my own work on providing test coverage reports using gpii-testem is ready for review here:\n\n<https://github.com/fluid-project/infusion/pull/822>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-07-03T06:18:39.486-0400",
      "body": "@@Antranig Basman (and @@Cindy Li) I was hoping @@Cindy Li could pick this up, as she handled the comparable universal pull very well.  Thoughts?\n"
    }
  ]
}
---
Currently, infusion only runs the node tests when `npm test` is run.  This PR updates the test configuration to:

1. Run the browser tests as well using [gpii-testem](https://issues.gpii.net/browse/GPII-2296)
2. Collect code coverage for both node and browser tests.

        