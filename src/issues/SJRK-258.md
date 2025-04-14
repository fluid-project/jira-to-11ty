---json
{
  "title": "SJRK-258",
  "summary": "Consider combining block and blockUi grade files",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-07-23T15:23:50.394-0400",
  "updated": "2019-07-23T15:26:29.236-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-257/",
      "key": "SJRK-257",
      "summary": "Combine editing and viewing blockUi grades for each block type"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The block and blockUi grades are across many files. Consider combining some of these files to reduce clutter. Revisit this after SJRK-257, as the situation may change once that work has been completed.

* e.g. audio, video and timeBased blocks
* Or maybe even all the block types

        