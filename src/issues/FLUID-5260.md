---json
{
  "title": "FLUID-5260",
  "summary": "Minification strips quotes from \"true\" and \"false\" keys; breaks IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2014-01-27T12:19:16.804-0500",
  "updated": "2014-02-14T13:12:35.083-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-02-14T13:12:32.189-0500",
      "body": "Fixed with changes for <https://fluidproject.atlassian.net/browse/FLUID-5120#icft=FLUID-5120> that switched to using grunt for build tasks.\n"
    }
  ]
}
---
The ModelTransformation code has an object that uses "true" and "false" as keys:

fluid.defaults("fluid.transforms.condition", { \
gradeNames: \[ "fluid.multiInputTransformFunction", "fluid.standardOutputTransformFunction" ],\
inputVariables: {\
"true": null,\
"false": null,\
"condition": null\
}\
});

For some reason, the minification process strips the quotes from the keys in this object, and the resulting JS causes an error in IE8, "Expected identifier, string or number" and the entire file fails to load, leading to fluid undefined, jquery undefined, etc.

        