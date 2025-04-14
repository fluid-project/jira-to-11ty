---json
{
  "title": "FLUID-5025",
  "summary": "IoCSS does not pass down options that are attached onto the top component at preInit or finalInit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-05-28T11:27:46.537-0400",
  "updated": "2014-03-03T11:50:40.469-0500",
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
      "date": "2013-05-30T14:58:33.382-0400",
      "body": "Unfortunately this issue cannot be resolved, since material supplied via preInit functions etc. are not genuinely part of the configuration of the component and so cannot be resolved via IoC. In fact, we plan to abolish completely support for the lifecycle functions preInitFunction, postInitFunction etc. by Fluid 2.0 so no further enhancements to their capabilities will be provided. By a result of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> \"ginger world\" semantics, all of these effects can (should) be had through a combination of dynamic grades (preferred), demands blocks (in situations where \"true adaptation\" is required) and distributed IoCSS blocks\n"
    }
  ]
}
---
For the options that are attached on the top component at preInit or finalInit, IoCSS does not pass them down to the target.

For instance, the definition of the "distributeOptions" is:\
distributeOptions: \[{\
source: "{that}.options.optionFromPreInit",\
target: "{that > subComponent}.options.optionFromPreInit"\
}, {\
source: "{that}.options.optionFromFinalInit",\
target: "{that > subComponent}.options.optionFromFinalInit"\
}]

If the source option "optionFromPreInit" is assigned at preInit() and "optionFromFinalInit" is assigned at finalInit(), they would not be passed down to {that > subComponent}.

The test case to demonstrate this issue: <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2687-2721>

        