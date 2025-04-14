---json
{
  "title": "FLUID-6437",
  "summary": "\"{that}\" distributed using \"record\" points to the source component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2019-11-28T15:36:54.773-0500",
  "updated": "2019-11-28T16:00:56.666-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5258/",
      "key": "FLUID-5258",
      "summary": "distributeOptions behaviour is inconsistent with respect to expansion context"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6214/",
      "key": "FLUID-6214",
      "summary": "Create syntax and implementation for options distribution to refer to its source"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-11-28T16:00:22.974-0500",
      "body": "Note that this is not necessarily a problem, since as it has turned out in the context of use, this was the desirable behaviour on most occasions. In practice it seems that we \"forgot\" in between the filing of <https://fluidproject.atlassian.net/browse/FLUID-5258#icft=FLUID-5258> and <https://fluidproject.atlassian.net/browse/FLUID-6214#icft=FLUID-6214> that the behaviour to resolve at the source was explicitly implemented, as seen in this implementation of fluid.generateExpandBlock:\n\n```java\nfluid.generateExpandBlock = function (record, that, mergePolicy, localRecord) {\r\n        var expanded = fluid.expandOptions(record.options, record.contextThat || that, mergePolicy, localRecord, {defer: true});\n```\n\nNote that the inconsistency noted in <https://fluidproject.atlassian.net/browse/FLUID-5258#icft=FLUID-5258> remains, in that material distributed into listener and invoker arguments will resolve at the target rather than the source.\n"
    }
  ]
}
---
When using "record" to distribute an option value with a reference to "{that}", "{that}" will be resolved to the source component rather than the target component. In this example:

```java
distributeOptions: [{
    record: "{that}.options.toDistribute",
    target: "{that child}.options.toDistributeTarget"
}]
```

"`that`.options.toDistribute" will be resolve to the value of "options.toDistribute" of the source component.

The branch with the test case to demonstrate this problem is <https://github.com/cindyli/infusion/tree/FLUID-6437>

        