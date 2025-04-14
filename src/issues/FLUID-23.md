---json
{
  "title": "FLUID-23",
  "summary": "jsUnit tests (now) run in IE7 and Safari/Win, but some fail.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-06-29T12:07:52.000-0400",
  "updated": "2007-08-08T12:29:25.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": "IE7/WinXP and SafariBeta3/WinXP/Mac OS X\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-7/",
      "key": "FLUID-7",
      "summary": "In IE6 & 7, focus style is not being applied to the first item in the Lightbox"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2007-08-08T07:54:27.000-0400",
      "body": "Only one test remains that passes in Firefox, but fails in IE and Safari on Windows: testPersistFocus()\n\nWe believe it fails because focus persistence in IE doesn't work as expected in terms of focus and blur events on the Lightbox node (i.e. the test **should** fail because there's a bug: <https://fluidproject.atlassian.net/browse/FLUID-7#icft=FLUID-7>). This applies to Safari as well.\n\nThe reason the MochiKit tests fail is because they have not been factored out yet - they shouldn't be run.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-08-08T12:29:25.000-0400",
      "body": "The tests are showing bugs in the code now, not problems with the tests themselves.  There is still an issue of publishing the test function names for the Mochikit version of the lightbox, but the plan is, as part of refactoring the lightbox, to move the Mochikit code to a \"sandbox\" project, where issues with Mochikit testing will be dealt with.\n"
    }
  ]
}
---
Previously, the Lightbox jsUnit tests did not run when using IE7, Safari on WIndows, nor Safari on Mac.  Michelle discovered a technique whereby one defines a "exposeTestFunctionNames()" function that publishes a string array containing the names of the test functions themselves. The function was added to TestConstants.js.

This technique has worked – the tests now run when using IE7 and Safari.  To be clear, only the tests in GridHandlerLayoutTests.js and LightboxTests.js were published using the technique; that is, none of the tests in MochiLIghtboxTests.html were so published.  As such, all of the tests continue to run, and run successfully, in FF.

None of the GridLayoutTests fail in IE7 nor Safari.  Seven of the Lightbox tests fail in IE7, and one fails in Safari.  The MochiLIghtbox tests fail, but that appears to be due to the lack of published test function names.  An attempt to add an exposeTestFunctionNames() to the top of MochiLIghtboxTests.html caused one of them to fail in FF (previously, it passed when not published).  The code committed to svn does **not** publish the MochiLightbox test names so that all continue to pass in FF.

We need to determine:

* why certain tests fail in IE7,
* why certain tests fail in Safari,
* how to publish the MochiLightbox tests such that they are run in IE7 and Safari, but do not fail in FF.

Notably, the ones that fail in IE7 and Safari frequently have to do with testing focus.

        