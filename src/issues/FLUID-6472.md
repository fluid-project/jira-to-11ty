---json
{
  "title": "FLUID-6472",
  "summary": "Fix dependencies in nexus-demos",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Philip Tchernavskij",
  "reporter": "Simon Bates",
  "date": "2020-03-11T10:35:20.351-0400",
  "updated": "2020-05-21T08:59:19.586-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Philip Tchernavskij",
      "date": "2020-03-23T21:24:19.554-0400",
      "body": "Colin Clark has fixed up `nexus-science-lab-synths`, and moved it to the `fluid-project` organization on GitHub. `simonbates/p4a-sensorAPI` and `waharnum/chartAuthoring` likely still require some work.\n"
    },
    {
      "author": "Philip Tchernavskij",
      "date": "2020-03-24T17:33:46.206-0400",
      "body": "Colin and I have completed the work necessary to make the demos build with updated dependencies. However, we haven't evaluated whether they still work.  We'll continue this work from his fork of the repository before creating a PR:\n\n<https://github.com/colinbdclark/infusion-nexus-demos/tree/FLUID-6472>\n"
    }
  ]
}
---
Currently `infusion-nexus-demos` depends on a mix of smaller repositories that are in various states of disrepair. For widely published libraries we depend on, we should change the dependency to the newest stable version number. For smaller repositories created explicitly for the demo, we should move the code to fluid-project and clean up the code. The short-term goal is that the demos should build unproblematically under Node 12.14.1.

        