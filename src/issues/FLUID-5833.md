---json
{
  "title": "FLUID-5833",
  "summary": "The test written in IoC testing framework runs fine on its own but throws error in all-tests.html",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2015-12-18T12:07:06.556-0500",
  "updated": "2016-02-04T15:16:03.836-0500",
  "versions": [
    "1.5.1"
  ],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": "Firefox, Chrome. Didn't test with Safari and IE\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-12-18T14:58:51.002-0500",
      "body": "Thanks for this report, @@Cindy Li, which is very interesting. It was very helpful that you were able to find the clue that the missing \"name\" property in the test fixtures was the issue. My feeling is that this is an issue that has eventually been handed up to us from the underlying QUnit implementation, since there are many places in its code base where it makes a simple \"truthy\" check for config.currentModule - e.g.\\\n<https://github.com/fluid-project/infusion/blob/master/tests/lib/qunit/js/qunit.js#L1254>\n\nIn the IoC testing framework we simply hand the \"name\" property on the test to jqUnit.module as so:\n\n<https://github.com/fluid-project/infusion/blob/master/tests/test-core/utils/js/IoCTestUtils.js#L588>\n\nwhich will probably screw up its bookkeeping about what tests are in progress. I think there is another error of this kind in the prefs framework tests which frequently causes mis-sequencing when I run all-tests and it will be great if we find both these issues have the same cause.\n\nMy best thinking for a fix at present is for the IoC testing framework to validate that the \"name\" property of a test cases is not falsy before it hands it on to QUnit.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-02-04T15:15:59.387-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/661> has been merged into the project repo @ 09fac7f7ca172073cd2628e8af578e47852b4977\n"
    }
  ]
}
---
The test to re-produce this issue is,

<https://github.com/cindyli/universal/blob/GPII-1245-odd/gpii/node_modules/gpii-oauth2/gpii-oauth2-authz-server/webTests/components/privacySettings/html/PrivacySettingsWithPrefs-test.html>

When running this test on its own, all tests pass. However, when including it as a part of all-tests.html (<https://github.com/cindyli/universal/blob/GPII-1245-odd/gpii/node_modules/gpii-oauth2/gpii-oauth2-authz-server/webTests/all-tests.html>), a javascript error is thrown:

Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.\
Source: \
QUnit.asyncTest@<http://localhost/gpii/node_modules/universal/node_modules/infusion/tests/lib/qunit/js/qunit.js:401:3>

After investigation, the issue is caused by the missing "name" field in the "tests" block. Rewriting this block (<https://github.com/cindyli/universal/blob/GPII-1245-odd/gpii/node_modules/gpii-oauth2/gpii-oauth2-authz-server/webTests/components/privacySettings/js/PrivacySettingsWithPrefsTests.js#L46-L51>) by adding a "name" field resolves the issue.&#x20;

The block that works:\
tests: \[{\
name: "a test",\
sequence: \[{\
....\
}]\
}]

        