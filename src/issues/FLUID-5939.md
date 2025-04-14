---json
{
  "title": "FLUID-5939",
  "summary": "Improve handling of voice selection in TextToSpeech wrapper component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-08-04T14:25:45.419-0400",
  "updated": "2024-07-22T09:22:58.993-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Due to changes in the Web Speech API, it is currently necessary to place a SpeechSynthesisVoice <https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice> object directly on the component model to permanently change the voice utterances will be spoken by. There is a separate issue already about updating the documentation to reflect this state: <https://issues.fluidproject.org/projects/FLUID/issues/FLUID-5935>

Storing objects on the model is an undesirable practice (even if it technically works), and we should find a better means of supporting selecting different voices through the wrapper, surfacing available voices and handling the asynchronous nature of voice loading represented by the \
onVoicesChanged event of the window.speechSynthesis object (this is particularly an issue in Chrome, which does not load available voices until after the document.ready event has fired).

From discussion with @@Justin Obara our thoughts are trending towards the following:

* support setting a "voice" object on the component model with some of the same values (lang / name / voiceURI) as available in a SpeechSynthesisVoice object
* monitor changes to that model path and provide functionality to try and resolve the voice that matches that voice most closely from the available browser voices

Foreseeable complexities include:

* the voiceURI attribute of the SpeechSynthesisVoice objects returned by speechSynthess.getVoices is different between all browsers tested (Chrome / Safari / FF on Mac) for the same voices
* different voices are available in the different browsers / operating systems
* according to the spec, "there is no guarantee that all names returned are unique" in regards to the name attribute of SpeechSynthesisVoice objects

        