---json
{
  "title": "FLUID-6321",
  "summary": "Typos in MockTTS",
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
  "reporter": "Antranig Basman",
  "date": "2018-08-17T09:27:40.397-0400",
  "updated": "2024-07-22T10:35:14.316-0400",
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
      "date": "2018-08-17T09:58:21.893-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/920) has been merged into the project repo master branch at d37426e02bc4cbe881f20a847acdfacab0aa4b1f\n"
    }
  ]
}
---
Originally filed as <https://issues.gpii.net/browse/GPII-3252>

 

The name of the actual method, and its implementation, are misspelled as "utterranceEnd". As shown in this linked coverage report, this works because the method is never called:

<http://the-t-in-rtf.github.io/coverage-reports/infusion/20180802/components/textToSpeech/js/MockTTS.js.html#L178>

        