---json
{
  "title": "FLUID-4913",
  "summary": "Update core framework and core test utils to work with both Browser and Node.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2013-02-04T15:54:15.573-0500",
  "updated": "2014-03-03T12:27:53.895-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-02-05T08:56:12.132-0500",
      "body": "Fixed and merged into master, rev: b01b06674cbf6f3620b39292d66ac688aff2945d\n"
    },
    {
      "author": "Colin Clark",
      "date": "2013-02-20T12:33:03.290-0500",
      "body": "While using Infusion in Flocking, I noticed that there are still stray calls to $.makeArray() in the framework that weren't fixed in this pull request (such as in initSubcomponents()).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-06T02:38:33.656-0500",
      "body": "Thanks for this, Colin - I appeared to merge this into master at 645b36 although as a result of some strange github topology, my subsequent merge of Yura's <https://fluidproject.atlassian.net/browse/FLUID-4913#icft=FLUID-4913> branch this evening makes it look as if it was in fact him who merged it in. Everything seems to have worked out in general although the \"black line\" as usual has gone for a Burton.\n\n<https://github.com/fluid-project/infusion/commit/645b369d97b9b615d7957d897c3a05c493dd6b58>\n\nFramework users should note that the facilities under test, \"initSubcomponent\" and \"initSubcomponents\" will be removed from Infusion in version 2.0\n"
    }
  ]
}
---
The following changes need to be made:

* FluidIoC.js has this line: fluid.staticEnvironment.environmentClass = fluid.typeTag("fluid.browser"); which makes the progression enhancement check for browser environment redundant and results in an error in IoC test utils when using sequence and running tests in Node.js. This detection check should just appear in progressiveEnhancement.
* Fluid.js has this line in fluid.emptySubcomponent: options = $.makeArray(options); which also fails when trying to use sequence without the "fluid.browser" context in Node.js. fluid.makeArray is more appropriate in its place.
* In order for the IoC sequence tests to pass in node, IoCTestUtils.js should use the same boilerplate as every other framework file.

        