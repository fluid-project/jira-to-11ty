---json
{
  "title": "FLUID-5950",
  "summary": "Update TextToSpeech documents for removed onPause & onResume events",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Alan Harnum",
  "date": "2016-09-01T17:56:49.806-0400",
  "updated": "2024-07-22T10:35:13.817-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
These are being removed as unnecessary in this PR because of the 'paused' model path that can be used via a model listener (see PR comments from @@Antranig Basman at <https://github.com/fluid-project/infusion/pull/732/#issuecomment-244151680>)

        