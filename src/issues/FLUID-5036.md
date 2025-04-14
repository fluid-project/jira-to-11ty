---json
{
  "title": "FLUID-5036",
  "summary": "The IoCSS source that is fetched from the static environment is not resolved correctly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-06-05T10:56:34.794-0400",
  "updated": "2014-03-03T11:49:04.272-0500",
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
      "date": "2013-06-05T15:05:45.662-0400",
      "body": "Hi cindy - thanks for these reports! The test cases are not entirely valid, since i) the staticEnvironment is not a component, and so the \"member name\" for any entries there is not meaningful, and ii) only actual components can be resolved as context names - you can't just place arbitrary material in the staticEnvironment and have it resolvable as a context! In fact we will before long remove all manual access to the staticEnvironment in order to ensure that only valid material is placed there.&#x20;\n\nUntil then you will need to ensure that everything you want to resolve as a context is actually a component - I have reworked your test cases so that they demonstrate this style at <https://github.com/amb26/infusion/commit/64a7eef4bf10a478afeaea2cdc345583c7354677#L1R2846> - however the misleading message from the framework \"Malformed context reference\" is indeed a bug and this pull request includes a fix for that issue\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-06-27T14:05:05.755-0400",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/337> into project repo at 659803923f6ade6a9d3366182c12521eeb9815d2\n"
    }
  ]
}
---
The two cases below are based on the condition of fetching the IoCSS source value from fluid.staticEnvironment.

Case 1:\
If the target pinpoints to a particular option regardless of whether this particular option is existing or not, nothing would be passed down.

The test case to demonstrate this issue: @ <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2804-2834>

Case 2:\
If the target is an existing options block, this error occurs at resolving the reference to the static environment variable: "Cannot parse context reference \\"{\\": Malformed context reference without }"

The test case to demonstrate this issue: @ <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2836-2865>

        