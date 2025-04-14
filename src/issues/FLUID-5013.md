---json
{
  "title": "FLUID-5013",
  "summary": "IoCSS does not pass down non-options blocks to the target component",
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
  "date": "2013-05-07T14:07:55.686-0400",
  "updated": "2015-11-08T21:17:46.308-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5813/",
      "key": "FLUID-5813"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-24T23:11:31.764-0400",
      "body": "Merged into trunk at revision e4ebd9\n"
    }
  ]
}
---
This "distributeOptions" expects the pass-down of all component definitions including options and non-options blocks.

fluid.defaults("fluid.tests.top", {\
....\
distributeOptions: {\
source: "{that}.options.templateLoader",\
exclusions: \[],\
target: "{that > templateLoader}"\
}\
});

However, the non-options blocks such as the new "type" is not found in the target component.

var top = fluid.tests.top({\
subComponent: {\
type: "fluid.tests.subComponent2"\
}\
});

The unit test for this issue is created @ <https://github.com/cindyli/infusion/blob/FLUID-5010/src/webapp/tests/framework-tests/core/js/FluidIoCTests.js#L2472-2505>

        