---json
{
  "title": "FLUID-6276",
  "summary": "Improve contextAwareness to handle nested dependency checks",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2018-04-25T10:38:44.353-0400",
  "updated": "2018-04-25T10:38:44.353-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the TTS tests require some logic to determine which tests to run on various platforms. This is to prevent test failures for unsupported features on a given platform. Unfortunately, for TTS there are multiple levels of checks that need to be run as there are a slew of variances for this. 

Current checks:

* Is speechSynthesis available 
  * <https://github.com/fluid-project/infusion/blob/master/src/components/textToSpeech/js/TextToSpeech.js#L32-L34>
* Is speechSynthesis available and actually working (e.g. an audio engine present)
  * <https://github.com/fluid-project/infusion/blob/master/src/components/textToSpeech/js/TextToSpeech.js#L36-L70>
* Are pause/resume events supported
  * <https://github.com/fluid-project/infusion/blob/master/tests/component-tests/textToSpeech/js/TextToSpeechTests.js#L265-L273>

 

For the tests we determine if TTS is supported and if so run tests and if not run a fake test that reports no tests should be run. However, we also have to determine if the TTS is supported to run a second set of tests for pause/resume only if those events are also supported.

<https://github.com/fluid-project/infusion/blob/master/tests/component-tests/textToSpeech/js/TextToSpeechTests.js#L280-L304>

At the moment this makes use of both contextAwareness and the "fluid.test.conditionalTestUtils.chooseTestByPromiseResult" utility for sorting parts out. It ends up requiring that the TTS support check is run twice.

Ideally we'd be able to layer or aggregate parts so that each of the checks only has to be run a single time.

 

        