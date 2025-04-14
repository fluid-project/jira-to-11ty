---json
{
  "title": "FLUID-6500",
  "summary": "Improve usability of arrayToSetMembership and setMembershipToArray transforms",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Antranig Basman",
  "date": "2020-05-18T09:26:59.251-0400",
  "updated": "2024-07-22T10:35:10.860-0400",
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
      "date": "2020-05-18T09:33:57.591-0400",
      "body": "For context, the existing transform pair can be found here:\n\n<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L345>\n"
    }
  ]
}
---
These are a powerful set of transforms but their documentation is a little ropy and the configuration required is rather bureaucratic. They should be updated so that 

i) They have some reasonable JSDoc comments in the implementation explaining their requirements, and that 

ii) The requirement to fully list all participating fields in the "options" structure is relaxed.

In particular, they should be improved so that the output of the function call

```java
fluid.transforms.arrayToSetMembership(["thing1", "thing2"])
```

applies sensible defaults to that it produces the result

```java
{
    "thing1": true,
    "thing2": true
}
```

and similarly for the inverse call of setMembershipToArray

 

This implies that the use of the 3rd arg "transformer" should be eliminated - I think the use of resolverSetConfig is not going to produce any helpfully different results, and the argument "transformSpec" should be made wholly optional.

        