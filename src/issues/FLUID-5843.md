---json
{
  "title": "FLUID-5843",
  "summary": "The self voicing enactor should set its language setting based on the lang attribute",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2016-01-19T08:53:06.634-0500",
  "updated": "2024-07-23T10:54:12.653-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Self Voicing",
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-01-19T08:57:14.206-0500",
      "body": "According to the web speech api, the language of the utterance should default to the lang of root element.\\\n<https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#utterance-attributes>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:54:12.653-0400",
      "body": "Appears to have been fixed with **FLUID-6278**\n"
    }
  ]
}
---
The underlying text-to-speech supports setting the language used, which will affect the synthesizer, as a model value or as an option passed into queueSpeech. Currently this has to be set as a manually by an integrator. However, the enactor should set the component model to the container's or page's lang attribute. Additionally anything that reads text from the DOM should check if the current element has a lang attribute set and use that.

        