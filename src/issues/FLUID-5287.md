---json
{
  "title": "FLUID-5287",
  "summary": "\"fluid.transforms.condition\" gives the wrong result when both true and false blocks have another transformation defined",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Cindy Li",
  "date": "2014-03-13T14:36:26.698-0400",
  "updated": "2014-03-17T15:48:46.313-0400",
  "versions": [
    "1.4"
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
      "author": "Cindy Li",
      "date": "2014-03-13T14:43:27.469-0400",
      "body": "Issued a pull request with a unit test to demonstrate this issue: <https://github.com/fluid-project/infusion/pull/479>\n\nKasper Galschiot Markus, let me know if my usage of fluid.transforms.binaryOp or fluid.transforms.condition is incorrect. Thanks.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-17T15:48:35.842-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/477> for <http://issues.fluidproject.org/browse/FLUID-5251> also fixes this issue.\n"
    }
  ]
}
---
The conditional transform "fluid.transforms.condition" has "true" and "false" options where a string or a nested transform are declared.

If only one of these true/false options has a nested transform declared while the other option has a string value, the conditional transformation outputs a correct result.

However, in the case that both options have nested transforms declared, the wrong result is given.

        