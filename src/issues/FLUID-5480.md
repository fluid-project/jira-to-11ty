---json
{
  "title": "FLUID-5480",
  "summary": "Naming of top-level options \"inputPath\" and \"defaultOutputPath\" in valueMapper are inconsistent and confusing",
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
  "reporter": "Antranig Basman",
  "date": "2014-07-23T17:06:22.690-0400",
  "updated": "2024-07-22T10:35:27.658-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5357/",
      "key": "FLUID-5357",
      "summary": "Allow transformation rules to default to inputPath of \"\" if neither input nor inputPath are specified"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-07-23T18:46:07.886-0400",
      "body": "Also, the mere requirement for \"inputPath\" as mandatory is confusing to users, especially in the context of model relay rules. If&#x20;\n\ninputPath: \"\"&#x20;\n\nis not specified, the transform will do nothing\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-05-12T15:41:41.912-0400",
      "body": "In addition, the valueMapper should default to a \"defaultInputPath\" of \"\" (the empty string) since this is overwhelmingly the expected case when writing relay rules.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-04-06T11:22:52.864-0400",
      "body": "The part related to the input paths \"\" as mentioned in the comments above by Antranig Basman should be done via <https://fluidproject.atlassian.net/browse/FLUID-5357#icft=FLUID-5357> which aims for this to be fixed as a general framework feature.\n\nIf the valueMapper should follow the standard semantics of the Model Transformation framework input-wise, the naming should probably be 'input' and 'inputPath'. In terms of defaultOutputPath, this is something we would need to figure out\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-09-13T03:41:40.505-0400",
      "body": "Given that the input path \"\" part of this jira is covered via <https://fluidproject.atlassian.net/browse/FLUID-5357#icft=FLUID-5357>. Do you think this can be closed by the clarified semantics in the new valuemapper?\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-10-26T09:23:59.417-0400",
      "body": "The confusion of the naming has been fixed here: <https://github.com/fluid-project/infusion/pull/710> ... the inputPath: \"\" is covered by <https://fluidproject.atlassian.net/browse/FLUID-5357#icft=FLUID-5357>\n"
    }
  ]
}
---
We need to standardise on a symmetric convention for this. Similar to the situation with "input" and "value" in the standard transforms, we have ended up with a system which is inconsistent since the names used cannot be directly predicted for the inverse of the same transform. We should probably rename "inputPath" to "defaultInputPath". This actually caused a bug in the inverse transform which affected the <https://fluidproject.atlassian.net/browse/FLUID-5479#icft=FLUID-5479> work

        