---json
{
  "title": "FLUID-5981",
  "summary": "It should be possible to insist that \"material provided as expander arguments is fully evaluated\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-10-15T20:26:16.051-0400",
  "updated": "2024-12-17T16:02:23.155-0500",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4930/",
      "key": "FLUID-4930"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-10-15T20:28:55.053-0400",
      "body": "<https://github.com/amb26/infusion/tree/FLUID-5981> contains a failing test case for this issue.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2024-12-17T16:02:22.971-0500",
      "body": "Resolved for Infusion 6 with new implementation of fluid.flattenSignals - <https://github.com/fluid-project/infusion-6/blob/main/tests/framework-tests/core/js/FluidILTests.js#L141-L144>\n"
    }
  ]
}
---
This issue writes up a particular subcase of FLUID-4930. Whilst pull request <https://github.com/fluid-project/infusion/pull/763> contains a partial fix, ensuring that at least options are fully evaluated by the time of component construction, it is still possible using the same configuration there to observe partially evaluated material as an expander argument. This is not economically possible to fix using the current framework, and requires us as part of the FLUID-4982 work to implement a separate provenance/progress object, together with allowing user intention with respect to extent of evaluation to be captured in a "potentia II"-like structure - see <https://github.com/amb26/papers/tree/master/ppig-2016a>

        