---json
{
  "title": "FLUID-5136",
  "summary": "Change fluid.transforms.firstValue to be a standardTransformation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2013-09-17T19:43:33.811-0400",
  "updated": "2016-04-13T04:25:35.657-0400",
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
      "date": "2016-04-13T04:25:35.657-0400",
      "body": "It is not clear that this JIRA is actually valid, since firstValue is a bit special in its behavior. By default all the entries of the firstValue transform are interpreted as transforms (ie. paths if they are strings). This would conflict with the current expectations of the model transformation systems standardInputFunction.\n"
    }
  ]
}
---
There is nothing preventing the firstValue transform to be a standardTransformation. This should be done to take advantage of the general functionality provided by those classes.

One caveat of this is that the input variable will be renamed from "values" to "value"

        