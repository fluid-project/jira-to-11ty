---json
{
  "title": "FLUID-6196",
  "summary": "Collect Input paths implementation faulty when combining standard and complex transforms",
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
  "date": "2017-09-19T04:33:58.029-0400",
  "updated": "2024-07-22T09:02:56.940-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When having a nested complex transform (such as the valueMapper) it destroys the array holding the inputPaths.&#x20;

In most cases we just pass around the array of input paths and expect that reference to hold (see: <https://github.com/fluid-project/infusion/blob/136c58613cb218ceaafc0528b24f2175a780009f/src/framework/core/js/ModelTransformation.js#L404> ) when modifying the content which is all fine and dandy until one of these <https://github.com/fluid-project/infusion/blob/136c58613cb218ceaafc0528b24f2175a780009f/src/framework/core/js/ModelTransformation.js#L413> come along. Apparently Array.concat returns a new array, which means that our previous inputPath array reference suddenly is no longer linked to the transformer object

        