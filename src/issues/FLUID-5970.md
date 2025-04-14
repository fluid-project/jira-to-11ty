---json
{
  "title": "FLUID-5970",
  "summary": "top-level \"undefined\" values in transforms result in an empty object....",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-09-27T05:04:44.436-0400",
  "updated": "2024-07-22T09:21:41.305-0400",
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
      "author": "Tony Atkins [RtF]",
      "date": "2016-09-27T05:10:58.401-0400",
      "body": "The previous discussion around this can be found here:\n\n<https://issues.fluidproject.org/browse/FLUID-5703>\n\nThe examples given here demonstrate that it's not simply a problem with transformation functions.  In the examples I gave, I cannot \"opt out\" of the input handling.  I would have to supply my own transformation function that closely mirrors fluid.transforms.value, but which does not extend standardInputTransformFunction.\n"
    }
  ]
}
---
There is still some work to be done around the handling of "undefined" values in the model transformation API.  If an input value or the result of a transform is "undefined", we have made a design decision to strip it out.  This is reasonable enough, but is specifically a problem when we expect to use the "" convention to pass through the original data type, as in the following examples:

```java
fluid.model.transformWithRules(new Date(), { "": ""}) // Returns today's date

fluid.model.transformWithRules("", { "": ""}) // Returns ""

fluid.model.transformWithRules(null, { "": ""}) // Returns null

fluid.model.transformWithRules({}, { "": ""}) // Returns {}

fluid.model.transformWithRules(undefined, { "": ""}) // Returns {}
```

The last two are obviously not equivalent, and yet produce the same results.  also, the last is the only case in which the simplest "passthrough" transformation rule returns a different type of data altogether.

I believe I can work around this behavior in a number of ways, but I wanted to point it out for further discussion.  If this is truly the intended behavior, at a minimum the special handling of undefined values should finally be [documented](http://docs.fluidproject.org/infusion/development/ModelTransformationAPI.html).

        