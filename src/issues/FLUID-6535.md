---json
{
  "title": "FLUID-6535",
  "summary": "Text-to-speech utterances will throw an error if the lang is set and no corresponding synthesizer is available.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-07-23T13:45:15.215-0400",
  "updated": "2020-07-23T13:45:45.607-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Text To Speech"
  ],
  "environment": "MS Edge 44 (non-chromium browser) Win 10.\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
SpeechSynthesisUtterance objects specified with a lang attribute that doesn't have a corresponding Synthesizer on the system will throw an error in MS Edge 44 (non-chromium edge). Other browsers will find the most appropriate synthesizer to use. For example in the Orator demo the lang is set to "en-CA". In my Windows 10 VM, MS Edge 44 only has synthesizers that support "en-US". If the lang is even specified as "en" it will still throw an error. This seems like a bug in the browser and it's unlikely it'll get fixed now that they've moved to a new version of Edge that is based off of Chromium.

        