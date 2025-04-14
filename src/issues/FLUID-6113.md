---json
{
  "title": "FLUID-6113",
  "summary": "Reorganise strategy for triggering Speech Synthesis in Text To Speech component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2017-01-16T14:07:40.397-0500",
  "updated": "2017-01-16T14:20:47.618-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6103/",
      "key": "FLUID-6103",
      "summary": "Infusion Text to Speech tests are now hanging or failing in Chrome"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The strategy for triggering SpeechSynthesisUtterances and listening to their transitions can be improved a bit. It seems that there is a dual (historical) strategy for avoiding races within the implementation - firstly a blanket deferral of 1ms as implemented in fluid.textToSpeech.deferredSpeechSynthesisControl , and secondly a throttling implementation copied from underscore.js. In the face of the 2nd, it could be that the 1st could be removed - we should experiment with this - if it can't removed, we should improve the whole implementation to explicitly manage a queue of activities, since otherwise it is possible that control actions may be delivered to the underlying API out of order. <http://stackoverflow.com/questions/11771558/execution-order-of-multiple-settimeout-functions-with-same-interval> - relying on in-order delivery exposes us to too much risk of bugs in the underlying implementation - which as we've seen with FLUID-6103 is not to be relied on in such a new and raw area.

Further, if the underlying Chrome bug for FLUID-6103 is not resolved reasonably soon, we should switch our reliance on the underlying onpause/onresume events to the triggering activities of this new queue, and assume that i) the implementation honours requested actions in a reasonably timely way, and ii) that there are no other sources of control on the SpeechSynthesisUtterance objects (these both seem like reasonable assumptions to me).

While we are at it, we should reduce the checkTTSSupport timeout on line 58 from 5000 ms to something more like 1000ms. There's no necessary connection this timeout length and the IoC Testing framework's timeout - either the implementation speaks or it doesn't, and it's currently responsible for an overall 10s delay in running the test cases.

        