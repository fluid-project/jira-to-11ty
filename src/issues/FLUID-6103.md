---json
{
  "title": "FLUID-6103",
  "summary": "Infusion Text to Speech tests are now hanging or failing in Chrome",
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
  "reporter": "Antranig Basman",
  "date": "2017-01-06T13:42:35.698-0500",
  "updated": "2017-08-01T10:24:55.495-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Text To Speech"
  ],
  "environment": "Windows 7 & 10 64-bit, Chrome Version 55.0.2883.87 m (64-bit)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6113/",
      "key": "FLUID-6113"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-01-06T14:30:51.077-0500",
      "body": "Quick observations from testing on what I've got in front of me:\n\n**Windows 10, Chrome 55.0.2883.87**\n\n* tests fail as Antranig Basman describes in Chrome (same version)\n* tests pass in Firefox 50.1.0\n* tests pass in latest MS Edge 38.14393.0.0 / EdgeHTML 14.14393\n\n**Mac OS X, Chrome 55.0.2883.95**\n\n* tests continue to pass on Chrome in this environment\n* tests pass on Firefox 50.1.0\n* tests pass on Safari 10.0.2\n\nEarly conclusions:\n\n* bug appears to be isolated to latest Chrome on Windows\n* ~~version difference between Chrome on Windows (55.0.2883.88) and Mac OS X (55.0.2883.95) may be an indicator of a browser bug that will be patched when the Windows release catches up to the Mac OS X release~~ Don't think this is correct in light of issue in the next comment.\n\nWill continue investigation.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-06T14:38:36.908-0500",
      "body": "Bug also appears to be present in Chrome 56.0.2924.51 beta on Windows 10.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-06T16:54:15.834-0500",
      "body": "I feel I've confirmed the root cause with this fiddle as originating in a browser bug: <http://jsfiddle.net/e2q81qLz/14/> - Antranig Basman, when you have a chance could you try that fiddle and confirm that you see the issues I describe on it? (pause and resume happen, but their corresponding events are not fired)\n\nWhile the pause and resume functions continue to work in the latest Chrome, the onpause and onresume events are not being properly fired. The TTS component and its test rely upon them to manage and detect the state of the speech.\n\nI will investigate this further and see about filing an issue with the Chrome team.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-06T17:08:58.550-0500",
      "body": "Also just confirmed that the bug is not present is Chrome (Chromium) 54.0.2840.0 by downloading an older version.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-06T17:23:57.310-0500",
      "body": "Bug filed with Chromium: <https://bugs.chromium.org/p/chromium/issues/detail?id=679043>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-01-06T19:53:56.521-0500",
      "body": "Cheers for this brilliant investigation, fiddle and bug filing, WAHHARNNUM! I can confirm that the jsfiddle fails in my version of Chrome, and runs fine in Firefox.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-09T10:01:58.112-0500",
      "body": "As an additional note, I believe the \"toggle\" behaviour of the failure modes is because of this bug (maybe) expected behaviour (also maybe): <https://bugs.chromium.org/p/chromium/issues/detail?id=639660&q=component%3ABlink%3ESpeech&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified>\n\nThe \"pause\" state of SpeechSynthesis acts as a browser global, not something that is reset when a page is reloaded. So if speechSynthesis.pause() is called in any context and then not \"cleaned up\" via called to speechSynthesis.resume() or speechSynthesis.cancel(), it will maintain that \"paused\" state and result in a failure of the promise that tests for TTS support (fluid.textToSpeech.checkTTSSupport) by speaking a short phrase and watching for the \"onend\" event (which doesn't happen, because the global pause state means that TTS doesn't happen.\n\nThis would mean the following flow:\\\n1\\) Pause/Resume Test Run #1 times out after going into the \"pause\" state, because no \"onpause\" event happens to signal advance into the resume state. Initialization/Start/Stop Test does not run because of the time out.\\\n2\\) Page is reloaded. Global speechSynthesis state is now paused.\\\n3\\) Pause/Resume Test Run #2 fails because of the \"pause\" state with a doubly rejected promise. Initialization/Start/Stop Test runs, and its cleanUp function (run at start) calls speechSynthesis.cancel(); this resets the global speechSynthesis state.\\\n4\\) Page is reloaded. Go back to Step 1.\n\nThe Chromium team has acknowledged the bug causing the issue (<https://bugs.chromium.org/p/chromium/issues/detail?id=679043#c3>), but I'm going to think about how we might refactor the component tests to better account for how the speechSynthesis API actually behaves.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-01-16T13:50:06.205-0500",
      "body": "Because this issue blocks our test suit from running on Chrome, we need to do something about it relatively soon, even if it is something drastic such as conditionally bypassing the TTS tests on Chrome. Is it possible that we could deliver any kind of functional TTS component for Chrome in the face of this bug, or do we need to withdraw the component for now?\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-16T14:00:12.151-0500",
      "body": "We could bypass the pause/resume tests on Chrome/Windows - we already do a bypass for Linux for similar reasons of imperfect implementation of the TTS APIs.&#x20;\n\nGiven this issue is a regression in Chrome for Windows, I am hoping it will be fixed soon, but until then I'd suggest we implement a bypass. I can do this following the same pattern (context awareness) that we use for skipping tests on Linux. Sound good?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-01-16T14:02:39.812-0500",
      "body": "Yep - sounds brilliant to me! But how much of the actual delivered functionality is compromised on Chrome/Windows - or is it that the pause/resume event handling is something that we rely on only in test cases?\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-16T14:11:18.029-0500",
      "body": "State changes to model.paused path (which is toggled by the TextToSpeech.onpause / onresume events) will be broken; at the moment, this is only relied upon in the test cases.\n\nFrom my testing, the TTS functions themselves (pause / resume of TTS) continue to work; they simply don't fire appropriate events on the state change.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-16T16:26:37.429-0500",
      "body": "Some investigation shows that reliable browser detection is still a moving target - <https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent> has the best explanation, but simply looking for \"Chrome\" / \"Safari\" / \"Firefox\" / \"Edge\" is unreliable, and will lead to false positives, resulting in the tests not running on browsers they are supported on.\n\nThe standard userAgent strings of many browsers stuff in the names of other browsers specifically to circumvent naive attempts to disable features based on browser; Edge's current one on Windows, FE (documented at <https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx>) includes Chrome and Safari. Chrome on Mac includes Safari as well as Chrome. The userAgent property is properly described here as an \"ever-growing pack of lies\": <https://lists.w3.org/Archives/Public/public-html/2014Feb/0040.html>\n\nI think pursuing the moving target of general browser detection is probably a bad idea, especially since browser vendors appear to specifically act against it, but as you point out we need to address this issue with some speed.\n\nI've opened a PR for discussion at <https://github.com/fluid-project/infusion/pull/799> that has a preliminary browser detection fix. I believe if we want to browser-detect it should only be for purposes of test-skipping in situations like this one, and it may require regular maintenance to keep up to date on the userAgent strings.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-01T10:24:52.561-0400",
      "body": "The PR ( <https://github.com/fluid-project/infusion/pull/799> ) was merged into the project repo\n"
    }
  ]
}
---
Unclear whether this has been caused by a recent Chrome update, but I imagine so - there are now two failure modes for TextToSpeech-test.html - the most common one is to hang during "Test Including Pause and Resume Events" with the following trace:

```java
Fri Jan 06 2017 18:38:57 GMT+0000 (GMT Standard Time):   Successfully queued test Test Including Pause and Resume Events
Fluid.js:282 Fri Jan 06 2017 18:38:57 GMT+0000 (GMT Standard Time):   Successfully queued test Test initialization
Fluid.js:282 Fri Jan 06 2017 18:38:57 GMT+0000 (GMT Standard Time):   Successfully queued test Test Start and Stop Events
Fluid.js:282 Fri Jan 06 2017 18:39:03 GMT+0000 (GMT Standard Time):   Test case listener has not responded after 5000ms - at sequence pos 3 of 21 sequence element  Object {listener: "fluid.tests.textToSpeech.testPause", args: Array[1], changeEvent: "{tts}.applier.modelChanged", path: "paused"}  of fixture Test Including Pause and Resume Events
```

the other, rarer, failure mode is to fail with a conflicted promise resolution as follows:

```java
Uncaught f…d.FluidError {message: "Assertion failure - check console for more details…on":"reject"} which has already received "reject"", stack: "Error: Assertion failure - check console for more …components/textToSpeech/js/TextToSpeech.js:63:25)"}
fluid.builtinFail @ Fluid.js:198
fire @ Fluid.js:1494
fluid.fail @ Fluid.js:213
that.resolve @ FluidPromises.js:49
toSpeak.onend @ TextToSpeech.js:63
```

One can cycle seemingly randomly through these two failure modes by refreshing the test page

        