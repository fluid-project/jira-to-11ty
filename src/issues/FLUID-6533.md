---json
{
  "title": "FLUID-6533",
  "summary": "Orator component throws unhandled promise rejection when synthesis fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2020-07-23T09:31:40.068-0400",
  "updated": "2024-07-22T10:35:12.398-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the FLUID-6145 line promise rejections need to be handled. The orator component fails to handle rejections of promises stemming from the speech synthesis throwing an error. 

The [root promise](https://github.com/fluid-project/infusion/blob/de7d4862533c4be46f576b8438849364aeee853d/src/components/textToSpeech/js/TextToSpeech.js#L389) is in the [fluid.textToSpeech.utterance](https://github.com/fluid-project/infusion/blob/de7d4862533c4be46f576b8438849364aeee853d/src/components/textToSpeech/js/TextToSpeech.js#L378) grade which [resolves/rejects](https://github.com/fluid-project/infusion/blob/de7d4862533c4be46f576b8438849364aeee853d/src/components/textToSpeech/js/TextToSpeech.js#L427-L428) the promise based on the speech utterance's onend and onerror events.

 

The above promise is followed by the one generated in [fluid.textToSpeech.queueSpeech](https://github.com/fluid-project/infusion/blob/de7d4862533c4be46f576b8438849364aeee853d/src/components/textToSpeech/js/TextToSpeech.js#L318) promise.

 

Eventually these all follow up to the being handled in the [fluid.orator.domReader.readFromDOM](https://github.com/fluid-project/infusion/blob/de7d4862533c4be46f576b8438849364aeee853d/src/components/orator/js/Orator.js#L679) and [fluid.orator.selectionReader.queueSpeech](https://github.com/fluid-project/infusion/blob/de7d4862533c4be46f576b8438849364aeee853d/src/components/orator/js/Orator.js#L930) functions. However, they both only handle promise resolutions and not rejections. These should both provide an appropriate handler for when the promise rejects.

 

NOTE: This was first discovered when testing MS Edge 44 with the Story Telling tool. It seems that Edge 44 throws an error if the speech synthesis utterance has the lang attribute set to a language code for which there is no matching synthesizer available. 

        