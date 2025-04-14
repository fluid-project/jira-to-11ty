---json
{
  "title": "FLUID-5385",
  "summary": "IoC Standalone tests are failing in all tests under safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-05-30T14:57:27.545-0400",
  "updated": "2014-06-02T15:25:16.107-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-02T15:25:16.096-0400",
      "body": "I can no longer reproduce this issue. Could have been a caching issue.\n"
    }
  ]
}
---
When running the all-tests.html file the FLUIDIoCStandalone-test.html fails.\
<http://build.fluidproject.org/infusion/tests/all-tests.html>

However running it directly passes.\
<http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidIoCStandalone-test.html>

Error message:

Parser Tests: global failure: TypeError: 'undefined' is not a function (evaluating 'message\["Assertion failure - check console for details"]\()')\
Expected: 	\
undefined\
Source: 	\
call@\[native code]\
Expected 456 assertions, but 1 were run\
Source: 	\
asyncTest@<http://build.fluidproject.org/infusion/tests/lib/qunit/js/qunit.js:401:13>

        