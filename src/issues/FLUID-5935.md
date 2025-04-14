---json
{
  "title": "FLUID-5935",
  "summary": "Update the TextToSpeech component docs and test the current component state",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-07-26T10:02:43.449-0400",
  "updated": "2024-07-22T09:23:18.520-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5936/",
      "key": "FLUID-5936",
      "summary": "fluid.textToSpeech.checkTTSSupport uses the wrong event handler name the end of a SpeechSynthesisUtterance"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-07-27T17:36:29.469-0400",
      "body": "This documentation update is not an dependent on <https://fluidproject.atlassian.net/browse/FLUID-5936#icft=FLUID-5936>, but another TTS-related issue surfaced recently.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-08-22T16:33:25.077-0400",
      "body": "Merged, closing.\n"
    }
  ]
}
---
The text-to-speech wrapper component documentation is out of date and has references to an **utteranceOpts** configuration block that actually needs to be within the model: <http://docs.fluidproject.org/infusion/development/TextToSpeechAPI.html>

I'll also take the opportunity to check what browsers it's working in and whether or not other parts of the documentation or component need updating. The SpeechSynthesis API seems to have stabilized / possibly gone through some changes.

        