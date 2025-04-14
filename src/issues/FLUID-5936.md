---json
{
  "title": "FLUID-5936",
  "summary": "fluid.textToSpeech.checkTTSSupport uses the wrong event handler name the end of a SpeechSynthesisUtterance",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-07-27T17:34:54.856-0400",
  "updated": "2019-07-12T09:15:30.357-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Self Voicing",
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5935/",
      "key": "FLUID-5935"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-07-28T16:43:19.173-0400",
      "body": "In my branch (in addition to fixing the issue with fluid.textToSpeech.checkTTSSupport)  I've refactored the tests to use the IoC testing framework, which makes it easier to see failures caused by event listeners never firing: <https://github.com/waharnum/infusion/tree/FLUID-5936> / <http://rawgit.com/waharnum/infusion/FLUID-5936/tests/component-tests/textToSpeech/html/TextToSpeech-test.html>\n\nCurrently on Mac OS the situation looks like this:\n\n* all tests pass on Chrome\n* the Pause/Resume tests time out listening for the onPause event on Safari and Firefox (with media.webspeech.synth.enabled set to true)\n\nI'm investigating further to try and determine the underlying cause.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-08-04T13:58:00.404-0400",
      "body": "It appears the issue may have been related to variations in async behaviour between the different browsers. Some further refactoring of the tests have allowed them all to pass in Chrome/Safari (and FF with media.webspeech.synth.enabled set true).\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-08-15T13:28:36.371-0400",
      "body": "PR at <https://github.com/fluid-project/infusion/pull/732>\n"
    }
  ]
}
---
In digging into an issue with the Chart Authoring code, I noticed that all the unit tests for the Text to Speech component were passing with a TEST SKIPPED message, even in TTS-supporting browsers. This is visible in <http://build.fluidproject.org/infusion/tests/component-tests/textToSpeech/html/TextToSpeech-test.html> if you use a browser (such as the latest Chrome) that has TTS support.

The issue appears to be with the "fluid.textToSpeech.checkTTSSupport" function using an event handler called "onstop" instead of "onend" when configuring the callback handler on the SpeechSynthesisUtterance it uses to test. The correct handler under the current API is "onend", per <https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance>.

Changing the handler to the correct one causes the tests to run (with the third set failing in FF, whose TTS is experimental and must be turned on via about:config).&#x20;

I'm going to investigate a bit further before I make a PR to make sure nothing aside from the tests uses "fluid.textToSpeech.checkTTSSupport".

        