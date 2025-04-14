---json
{
  "title": "FLUID-5890",
  "summary": "Include inRange and Quantize in the model transformation framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2016-04-15T09:08:59.809-0400",
  "updated": "2016-07-08T09:07:08.600-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-04-15T09:44:14.092-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/701>\n"
    }
  ]
}
---
There are currently two transformation functions in the GPII universal repository that would be generally usable:

quantize: <https://github.com/GPII/universal/blob/718b599668e2350966a7a002ba776fe6c798ac2a/gpii/node_modules/transformer/src/js/Transformer.js#L108-L123>

and&#x20;

inRange: <https://github.com/GPII/universal/blob/718b599668e2350966a7a002ba776fe6c798ac2a/gpii/node_modules/transformer/src/js/Transformer.js#L141-L148>

These should be moved to the infusion repository

        