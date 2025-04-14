---json
{
  "title": "FLUID-5346",
  "summary": "Climate Change demo's TTS engine reads a hidden overview panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2014-04-30T15:04:12.542-0400",
  "updated": "2015-06-26T09:58:22.745-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:40:58.079-0400",
      "body": "Could not reproduce. Likely addressed with the change to using the Web Speech API and the addition of TextToSpeech.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:49.668-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
In the climate change preferences framework demo, the Speak panels' TTS enactor will read the content of the overview panel even if the panel is hidden.

        