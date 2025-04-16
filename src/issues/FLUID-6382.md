---json
{
  "title": "FLUID-6382",
  "summary": "All tests randomly fail at Syllabification tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2019-07-17T12:40:30.747-0400",
  "updated": "2019-08-08T09:35:32.351-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "Testing Infrastructure"
  ],
  "environment": "Chrome 75 (Linux - Fedora 28, macOS 10.14.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-07-17T12:44:36.582-0400",
      "body": "I was also able to reproduce the issue running the infusion all tests directly in Fedora 28 on Chrome. I haven't been able to reproduce else where.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-17T12:47:06.700-0400",
      "body": "Antranig Basman suggested in the \\[fluid-work channel today|<http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-07-17.log>,] \"If I were to make a random guess, I would say that the failure is that it is possible sometimes for the promise dispensed from fluid.prefs.enactor.syllabification.injectScript to never resolve\" \n\nAdditionally he suggested that it could be related to $.ajax and that we should try using raw XHR. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-17T12:48:11.452-0400",
      "body": "The random failures occurring in CI can be seen in at least the following PRs.\n\n* <https://github.com/fluid-project/infusion/pull/921>\n* <https://github.com/fluid-project/infusion/pull/824>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-19T09:18:30.282-0400",
      "body": "The random test failures actually seem to be stemming from the fluid.tests.syllabificationTester.verifySyllabified test function, specifically where it is trying to test \\[childNode.nodeType|<https://github.com/fluid-project/infusion/blob/master/tests/framework-tests/preferences/js/SyllabificationEnactorTests.js#L276>.] The issue being that in random cases childNode is undefined. \n\n \n\nIt seems that all of the random test failures occur from the [first invocation](https://github.com/fluid-project/infusion/blob/master/tests/framework-tests/preferences/js/SyllabificationEnactorTests.js#L202-L205) of the function in the Add/Remove syllabification test sequence. This is test is triggered after the syllabification has ben applied, so there may be some issue with the childNodes not being available yet. However, it appears the that DOM is already modified ahead of time.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-19T09:22:41.968-0400",
      "body": "Upon further investigation it appears that when the random failure occurs it is because the syllabification of the [\"flc-syllabification-generic\"](https://github.com/fluid-project/infusion/blob/master/tests/framework-tests/preferences/html/SyllabificationEnactor-test.html#L55) markup hasn't occurred. In fact adding a listener to afterSyllabification, with a priority of first, is triggered twice. I used a listener like this in fluid.prefs.enactor.syllabification directly to output the markup of the enactors container. It was triggered before and after the test with the first output having all but the flc-syllabification-generic content properly syllabified. On the second triggering, flc-syllabification-generic was also syllabified.\n\nNOTE: flc-syllabification-notAvailable content shouldn't be split into syllables in the test, and it isn't in either of the above cases.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-19T10:19:20.846-0400",
      "body": "It appears that there is some issue with the timing related to the \"en\" lang hyphenator's promise resolving for use with applying the hyphenation in [fluid.prefs.enactor.syllabification.syllabify](https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/SyllabificationEnactor.js#L299-L304) and the one used by the sequence to fire the afterSyllabification event in [fluid.prefs.enactor.syllabification.waitForHyphenators](https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/SyllabificationEnactor.js#L165-L172). We really always want the former to trigger first, but it appears that in some cases the later goes through which causes the tests to run before we attempt to hyphenate the \"en\" lang case (that is the generic case mentioned in prior comments. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-19T10:20:49.154-0400",
      "body": "If this is really only the case for generic language codes when a specific language code is available, there is likely some mistaken logic with the promise creation in [fluid.prefs.enactor.syllabification.createHyphenator](https://github.com/fluid-project/infusion/blob/master/src/framework/preferences/js/SyllabificationEnactor.js#L213)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-08-08T09:35:25.198-0400",
      "body": "PR ( <https://github.com/fluid-project/infusion/pull/958> ) merged into the project repo.\n"
    }
  ]
}
---
This seems to be the case both on CI and when running locally through "npm run test:vagrant"

Randomly the tests stall at the Syllabification Enactor Test Suite on fluid.prefs.enactor.syllabification: Add/Remove syllabification. They only seem to fail in Chrome.

        