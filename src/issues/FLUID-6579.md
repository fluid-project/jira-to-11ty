---json
{
  "title": "FLUID-6579",
  "summary": "Code coverage for Infusion can reported changes in files which have not been touched",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2020-11-13T10:29:44.562-0500",
  "updated": "2024-07-18T07:35:30.161-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-11-16T07:44:01.590-0500",
      "body": "Antranig Basman the reports are generated from NYC and sent to codecov for reporting. I was testing a PR out locally last week and also noticed an anomalous drop in coverage in one run. I have a suspicion that this might be caused by some of our conditional tests randomly not running. For example the text-to-speech system has a condition to [check if TTS is supported](https://github.com/fluid-project/infusion/blob/main/tests/component-tests/textToSpeech/js/TextToSpeechTests.js#L22-L62) in the browser. In this case it might be timing out on some runs; thus dropping the coverage report.\n"
    }
  ]
}
---
CI for <https://github.com/fluid-project/infusion/pull/1036> failed because it claimed there were changes in TextToSpeech.js and Orator.js which there were not.

        