---json
{
  "title": "FLUID-6319",
  "summary": "The Orator demo is broken because of a typo in the TTS dependency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2018-08-13T13:21:13.108-0400",
  "updated": "2024-07-22T10:35:03.840-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-08-13T14:51:33.525-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/919) has been merged into the project repo master branch at c56ddc30473b58e80d435f32f322cd89589763cb\n\n \n"
    }
  ]
}
---
The Orator demo ( <https://build.fluidproject.org/infusion/demos/orator/> )is broken because the TTS dependency points at <https://build.fluidproject.org/infusion/src/components/textToSpeech/js/textToSpeech.js> instead of <https://build.fluidproject.org/infusion/src/components/textToSpeech/js/TextToSpeech.js>

The differences is just that the TextToSpeech.js file name should be heads up camel case instead of heads down. This isn't always caught when testing locally because of case insensitivity. 

        