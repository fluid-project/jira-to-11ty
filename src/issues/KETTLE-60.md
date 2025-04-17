---json
{
  "title": "KETTLE-60",
  "summary": "Update Kettle's testing framework to the FLUID-5903 sequence grade system",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-05-16T19:25:24.801-0400",
  "updated": "2017-05-16T19:25:24.801-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Widespread work on taking advantage of the new ~~FLUID-5903~~ sequence grade system for the ioC Testing framework can't proceed until Kettle itself starts the process of updating. In attempting to write tests for the GPII app with Michelle D'Souza, we discovered the need to fork and modify **all** of the functions following this point in KettleTestUtils.js - <https://github.com/fluid-project/kettle/blob/master/lib/test/KettleTestUtils.js#L225> - in order to replace the hard-coded reference to `kettle.test.startServerSequence`. This really needs to be written up in our <https://wiki.fluidproject.org/display/fluid/Bestiary+of+Reuse+Failures> page.

We need a sequence-grade enabled, and generalised, version of `kettle.test.bootstrapServer` and all the definitions it depends on. This will also aid parallel work in gpii-express.

        