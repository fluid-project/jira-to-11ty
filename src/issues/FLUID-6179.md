---json
{
  "title": "FLUID-6179",
  "summary": "deprecate all top-level defaultXxxx properties in model transformations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-08-03T14:19:24.094-0400",
  "updated": "2017-09-28T07:36:05.184-0400",
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
      "author": "Antranig Basman",
      "date": "2017-09-28T07:32:30.056-0400",
      "body": "Hopefully a side-effect of resolving this issue would enable the valueMapper to be used as a singleTransform in a relay rule without spuriously needing the a \"path\" element set - as in\n\n```java\nsingleTransform: {\r\n            type: \"fluid.transforms.valueMapper\",\r\n            defaultInputPath: \"\", // required due to FLUID-6179 not yet resolved\r\n            match: [{\r\n                inputValue: null,\r\n                outputValue: \"{that}.options.icons.keyedOut\"\r\n            }],\r\n            noMatch: \"{that}.options.icons.keyedIn\"\r\n        }\n```\n\nsee <https://codepen.io/Bosmon/pen/NajXZZ?editors=1111>\n"
    }
  ]
}
---
We should deprecate all top-level defaultXxxx properties in favour of implementing them as xxxx. For example changing defaultInput to input.

This issue was originally noticed while updating the valueMapper for <https://fluidproject.atlassian.net/browse/FLUID-6174#icft=FLUID-6174>.

See: <https://github.com/fluid-project/infusion/pull/838#discussion_r131189199>

        