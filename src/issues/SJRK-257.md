---json
{
  "title": "SJRK-257",
  "summary": "Combine editing and viewing blockUi grades for each block type",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-07-23T15:17:57.021-0400",
  "updated": "2019-07-23T15:26:23.750-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-258/",
      "key": "SJRK-258"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Look into having one blockUi grade per block type and a flag for editing/viewing. We currently have separate grades for editing and viewing per block type. Take into account shared code, e.g. the mediaBlockEditor grade.

        