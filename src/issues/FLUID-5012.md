---json
{
  "title": "FLUID-5012",
  "summary": "IoCSS does not apply the gradeNames option onto the target component",
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
  "date": "2013-05-07T14:03:25.267-0400",
  "updated": "2014-03-03T11:56:49.141-0500",
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
      "author": "Antranig Basman",
      "date": "2013-05-24T23:11:11.290-0400",
      "body": "Merged into trunk at revision e4ebd9\n"
    }
  ]
}
---
The distributeOptions below expects all the user options are merged properly:

fluid.defaults("fluid.tests.uio", {\
....\
distributeOptions: {\
source: "{that}.options.templateLoader",\
exclusions: \[],\
target: "{that > templateLoader}.options"\
}\
});

However, the "gradeNames" option is not. In this code where an extra grade "fluid.tests.defaultTemplateLoader" is supplied,

var uio = fluid.tests.uio({\
templateLoader: {\
gradeNames: \["fluid.tests.defaultTemplateLoader"]\
}\
});

The new grade is not merged into the existing grade list.

The unit test for this issue is created @ <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2437-2470>

        