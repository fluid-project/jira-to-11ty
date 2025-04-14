---json
{
  "title": "FLUID-6398",
  "summary": "Framework should consider promises uncopyable when they appear in options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-09-20T08:32:55.765-0400",
  "updated": "2024-07-19T08:02:57.825-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the TextToSpeech component there was a need to write an extra piece of promise-following machinery in onCreate <https://github.com/jobara/infusion/blob/FLUID-6278/src/components/textToSpeech/js/TextToSpeech.js#L146> - this might well be because the framework considers promises as copyable when evaluating component options. We should given them a custom constructor as we do for, e.g. components themselves, so that they are instead handed around as if they were immutable.

        