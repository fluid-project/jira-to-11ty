---json
{
  "title": "FLUID-5172",
  "summary": "Some framework IoC tests fail in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-10-08T12:48:01.214-0400",
  "updated": "2014-03-03T11:27:30.258-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "Only fail IE8.&#x20;\n\nWork fine with IE9, IE10 and latest version of firefox, safari and chrome.\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5174/",
      "key": "FLUID-5174"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-10-24T03:12:47.345-0400",
      "body": "This failure was caused by a combination of recent framework work. In particular, the combination of <https://fluidproject.atlassian.net/browse/FLUID-5089#icft=FLUID-5089> \"fluid.isPlainObject\" and <https://fluidproject.atlassian.net/browse/FLUID-5127#icft=FLUID-5127> \"compact invokers\" caused a new pathway to be possible where options material supplied to fluid.rawDefaults passed through a new expansion phase operated by fluid.expandCompact. This dispatched to the new \"fluid.isPlainObject\" utility which it turns out is faulty on IE8. On all reasonable browsers, the diagnostic test Object.prototype.toString.call supplied to null and undefined produces special results \"\\[object Null]\" and \"\\[object Undefined]\" respectively. Unfortunately on IE8, both of these tests produce the value \"\\[object Object]\" which is indistinguishable to the return from general objects. This caused configuration of the form\n\nevents: {\\\nevent1: null\\\n}\\\nto become corrupted to \\\nevents: {\\\nevent1: {}\\\n}\n\nby passing through fluid.expandCompact as a result of the unguarded test             if (fluid.isPlainObject(value)) { on line 1806 of FluidIoC.js\n\nThe fix is to add a cheap test for falsy values at the beginning of fluid.isPlainObject\n"
    },
    {
      "author": "Colin Clark",
      "date": "2013-10-30T13:00:08.194-0400",
      "body": "I have reviewed and tested this fix. Unfortunately we still have test failures in IE8, but this fix causes substantially fewer failures, and they fail further into the testing process. So I think it's a good fix.\n\nHere are the tests that still fail for me in IE8, post fix:\n\nModelTransformation-test.html\\\nFluidIoCStandalone-test.html\\\nProgressiveEnhancement-test.html\\\nBuilder-test.html\\\nPanels-test.html\\\nImageReorderer-test.html\\\nFileQueueView-test.html\\\nHTML5UploaderSupport-test.html\n"
    },
    {
      "author": "Colin Clark",
      "date": "2013-10-30T13:00:32.452-0400",
      "body": "Reviewed and merged into master at b20510c949cd943c8fa0dd652d2ffd22735b01b4.\n"
    }
  ]
}
---
Use IE8 to open up these test files:

<http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoC-test.html>\
<http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoCStandalone-test.html>\
<http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoCView-test.html>

Some unit tests fail with the error: Event specification for event with name \[XXX] does not include a base event specification.

        