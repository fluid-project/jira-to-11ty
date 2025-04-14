---json
{
  "title": "FLUID-5027",
  "summary": "IoCSS can not pass source to a target that is a sub-component originated from another distribution block",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-05-30T14:00:56.362-0400",
  "updated": "2014-03-03T11:50:21.091-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-30T15:01:41.078-0400",
      "body": "There is a typo in this test case (DeeperSubComponentOption <-> deeperSubComponentOption) and when this was fixed, the test case passed. Closing for now as \"not a bug\" but please feel free to reopen if the root cause is uncovered - through IRC channel discussion today (30 May 2013) it seemed that the issue resulted from attempting to distribute non-genuine component options material defined using the manual \"derivedDefaults\" mechanism from the old (obsolete) version of UIOptions\n"
    }
  ]
}
---
With IoCSS, if one distribution block is to define an extra subcomponent, which is "subOfSubComponent" in this code:

defineDeeperSubComponent: {\
components: {\
subOfSubComponent: {\
type: "fluid.tests.fluid5026subOfSub"\
},\
}\
},\
distributeOptions: \[{\
source: "{that}.options.defineDeeperSubComponent",\
target: "{that > subComponent}.options"\
}]

While another distribution block attempts to pass options to the new "subOfSubComponent", the pass-down would fail.

The test case to demostrate this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2723-2762>

        