---json
{
  "title": "FLUID-5589",
  "summary": "Create a wrapper around the SpeechSynthesis interface from the web speech api",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-01-21T07:50:07.960-0500",
  "updated": "2015-06-26T10:07:47.659-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-01-21T10:08:57.678-0500",
      "body": "Work currently underway at <https://github.com/jobara/infusion/blob/FLUID-5589/src/components/textToSpeech/js/TextToSpeech.js>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-01-23T10:22:54.053-0500",
      "body": "Chrome 40 does not fully support pause. ( this includes setting the property and firing the event)\\\n<https://code.google.com/p/chromium/issues/detail?id=425553&q=SpeechSynthesis&colspec=ID%20Pri%20M%20Week%20ReleaseBlock%20Cr%20Status%20Owner%20Summary%20OS%20Modified>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-01-29T11:05:07.635-0500",
      "body": "Submitted a pull request \\\n<https://github.com/fluid-project/infusion/pull/583>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-02-03T15:14:47.253-0500",
      "body": "Submitted another pull request that addresses issues with the dependency files\\\n<https://github.com/fluid-project/infusion/pull/584>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-02-03T15:29:55.764-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/583> is merged @ 2a6793891aee7ee2ad41420d52d10c50a2359593\n\nThe pull request <https://github.com/fluid-project/infusion/pull/584> is merged @ 4413d0020a62585e30a37331edd49c4d0e61b1ad\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:11.430-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Create to wrap the features and functions of a the Web Speech API's SpeechSynthesis interface.&#x20;

The wrapper should provide an abstraction over the Synthesizer and Utterance objects provided by the browser, while allowing all of the necessary methods, options, properties, and events to be exposed in a means that this is easily accessible to a user/integrator and works with IoC.

See: \
<https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section>\
<http://caniuse.com/#feat=speech-synthesis>\
<http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API>\
<http://blog.teamtreehouse.com/getting-started-speech-synthesis-api>

        