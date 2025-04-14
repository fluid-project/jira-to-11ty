---json
{
  "title": "FLUID-5051",
  "summary": "Implement collectInputPaths functionality for all the transformation functions",
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
  "date": "2013-06-13T07:14:39.584-0400",
  "updated": "2024-07-22T10:35:24.630-0400",
  "versions": [
    "1.5"
  ],
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
      "date": "2016-05-25T03:21:25.863-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/715>\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-09-13T03:35:29.594-0400",
      "body": "Replaced by <https://github.com/fluid-project/infusion/pull/740> which has been merged, so closing\n"
    }
  ]
}
---
At least arrayToObject and objectToArray functions are missing a collectInputPaths function. This should be implemented, and on a more general level, all the transformations should have a collectInputPaths function.

Specifically, the following needs to be checked:

* New implementation of valueMapper
* fluid.transforms.condition
* fluid.transforms.linearScale
* fluid.transforms.binaryOp
* fluid.transforms.indexArrayByKey
* fluid.transforms.deindexIntoArrayByKey
* fluid.transforms.stringTemplate

        