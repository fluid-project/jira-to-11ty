---json
{
  "title": "FLUID-6333",
  "summary": "Implement a word spacing adjuster and enactor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2018-08-31T08:38:25.770-0400",
  "updated": "2024-07-22T08:53:35.975-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-09-21T08:20:45.624-0400",
      "body": "Merged Infusion-Icons PR ( <https://github.com/fluid-project/infusion-icons/pull/6> ) at a14272979e6ce485a73a54d133653c11bb649cb3\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-09-24T19:09:28.182-0400",
      "body": "[The infusion pull request](https://github.com/fluid-project/infusion/pull/936) has been merged at 05b2dbfdcd29d88dae1460a332fed71f656be674\n"
    }
  ]
}
---
As part of the work on UIO+ we need a word spacing adjuster/enactor. This should be similar to how the text size, line spacing and letter spacing adjusters/enactors work, but will adjust the space between the words. 

This should be possible to do using the "word-spacing" css style.

<https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing>

        