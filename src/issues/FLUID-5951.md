---json
{
  "title": "FLUID-5951",
  "summary": "fluid.textToSpeech.checkTTSSupport incorrecly reports in MS Edge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-09-07T09:24:52.944-0400",
  "updated": "2017-01-16T14:28:56.520-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Self Voicing",
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-09-07T09:49:04.794-0400",
      "body": "PR at <https://github.com/fluid-project/infusion/pull/746>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-09-14T09:46:31.997-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/746> ) into the project repo at ee32c8c516074029854da53bc53e0cc455622279\n"
    }
  ]
}
---
The newest MS Edge supports the text to speech API & all tests pass. However, the fluid.textToSpeech.checkTTSSupport function that gates the test runs incorrectly reports Edge doesn't support TTS (I removed it locally to check).

The issue seems to be twofold:

* MS Edge won't actually speak if SpeechSynthesisUtterance is given an empty string
* fluid.promise has slow performance on MS Edge & takes more than the default 1 second to return

A small patch is incoming for this issue that will make the TTS wrapper work in Edge.

        