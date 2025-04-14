---json
{
  "title": "FLUID-5018",
  "summary": "IoCSS: Able to pass to-be-resolved option to target(s)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-05-13T10:11:31.982-0400",
  "updated": "2024-07-22T09:35:04.477-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-24T23:12:46.147-0400",
      "body": "Merged into trunk at revision e4ebd9\n"
    }
  ]
}
---
If the source option is a to-be-resolved value such as "{that}.options.userOption", the current IoCSS is not able to pass the resolved value down to the target.

Example:\
distributeOptions: {\
source: "{that}.options.toBeResolvedOption",\
exclusions: ...,\
target: "{that > ownSub}.options.resolvedOption"\
},\
toBeResolvedOption: "{that}.options.userOption",

The test case to demonstrate this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2643-2668>

        