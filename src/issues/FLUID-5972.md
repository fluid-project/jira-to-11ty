---json
{
  "title": "FLUID-5972",
  "summary": "Add a convention for transforming each member of an array...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-09-27T06:00:07.519-0400",
  "updated": "2024-07-22T09:21:13.486-0400",
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
      "date": "2016-10-04T10:53:17.750-0400",
      "body": "The use case is fine, but the implementation strategy is inappropriate - we can't support a fresh re-entry into the top of fluid.model.transformWithRules because there is a whole ecology of other use cases which the transformation system needs to support, including:\\\ni) The \"collectInputPaths\" strategy for the entire system\\\nii) Support for inverting transforms\\\niii) Integration with the modelRelay infrastructure\\\netc.\n\nThis should be rewritten to use the standard \"expand\" or \"getValue\" primitives that the transformer exposes internally which you can see in transforms which process multiple values such as \\\n<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L123>\\\nand\\\n<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L239>\\\nand\\\n<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L285>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-10-05T08:47:27.642-0400",
      "body": "@@Kasper Galschiot Markus, @@Antranig Basman, would either of you care to comment on what `transformer` is likely to be on this line:\n\n<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L116>\n\nI would like to:\n\n1. Add JSDocs throughout the file if possible.\n2. Understand the implications of this variable for my own work on the array handler.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-10-05T08:53:54.392-0400",
      "body": "Note that there is a huge amount of work documenting the transforms in this pull: <https://github.com/fluid-project/infusion-docs/pull/86> - this is probably mostly back in my court but has been tough to review because of the absolutely giant diff.\n\n`transformer` on line 116 is the \"core transformer engine\" which is created here: <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformation.js#L612>\n"
    }
  ]
}
---
In my own work, I created a transform function that allows you to perform a single transformation on every element in an array:

<https://github.com/the-t-in-rtf/ul-api/blob/UL-65/src/js/client/transformArray.js>

As I will be working on submitting other transformation functions, I wanted to create this and ask @@Antranig Basman if he'd like to see this as well.  "hell no" and "not yet" are perfectly acceptable answers.

        