---json
{
  "title": "FLUID-5811",
  "summary": "distributeOptions is not completely dynamic with respect to target component type",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-11-07T22:16:00.834-0500",
  "updated": "2017-10-17T17:03:11.169-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5750/",
      "key": "FLUID-5750",
      "summary": "Implement \"options flattening revolution\", flattening all material in \"options\" onto \"top-level material\""
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-10-17T16:40:34.977-0400",
      "body": "Check: Will this be resolved by the <https://issues.fluidproject.org/browse/FLUID-6148> work, since both assembleCreatorArguments and argMap are gone?\n"
    }
  ]
}
---
fluid.assembleCreatorArguments begins with the following dodgy sequence:&#x20;

```java
fluid.assembleCreatorArguments = function (parentThat, typeName, options) {
        var upDefaults = fluid.defaults(typeName); // we're not responsive to dynamic changes in argMap, but we don't believe in these anyway
        if (!upDefaults || !upDefaults.argumentMap) {
            fluid.fail("Error in assembleCreatorArguments: cannot look up component type name " + typeName + " to a component creator grade with an argumentMap");
        }
```

The situation we'd LIKE to enable is - there is a placeholder "type" field in the component tree, e.g. "gpii.deviceReporter" which is used to receive a distribution which advises it away to some concrete type, e.g. "gpii.deviceReporter.static" - we don't necessarily expect to do this by broadcasting to "type" itself although this could be an interesting courtesy if we are really prepared to deal with the resulting type instability - but it would be nice for "gpii.deviceReporter" to be completely abstract and then, for example, broadcast "gpii.deviceReporter.static" to its gradeNames.&#x20;

Unfortunately this simple-minded concrete check complains about the unconcreteness of the original type name before we get a chance to receive our "early distributions" later on. It seems like we can't easily solve this before FLUID-5750 options flattening since the purpose of this silly concrete check seems to be in order to know what is in the "argMap" in order to collect the distributions for the keys in it.

        