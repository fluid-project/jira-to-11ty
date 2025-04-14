---json
{
  "title": "FLUID-6092",
  "summary": "Rename member \"elements\" introduced in IoC Testing framework to \"sequenceElements\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-12-06T11:36:06.545-0500",
  "updated": "2016-12-06T14:55:52.991-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-12-06T14:55:24.753-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/796> ) into the project repo at 85a1ffecfc1d39d60745c95c83c5b5398b906ade\n"
    }
  ]
}
---
The FLUID-5903 features of the IoC testing framework explained at <https://github.com/amb26/infusion-docs/blob/FLUID-5903/src/documents/IoCTestingFramework.md#using-sequencegrade-to-build-up-complex-reusable-test-sequences> introduced a member named "elements" holding a hash of names to sequence definitions. It's quite likely that this will become a reserved word in a future version of the framework, as per the discussion in <https://wiki.fluidproject.org/display/fluid/Plan+to+Abolish+Invokers+and+Events> . We should quickly take the opportunity to rename this "sequenceElements" as also being more descriptive.

        