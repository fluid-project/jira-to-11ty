---json
{
  "title": "FLUID-6223",
  "summary": "Update fluid.stringTemplate to support deeper paths...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-11-14T05:52:19.891-0500",
  "updated": "2024-07-22T10:35:18.882-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-14T06:10:29.052-0500",
      "body": "I just realised that we would also need to support incomplete segments, so that we can substitute variables that are not separated from non-key textual content, as in:\n\n```java\nfluid.stringTemplate(\"%variable\", { varia: \"flexi\"}); // returns \"flexible\"\n```\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-14T06:29:29.009-0500",
      "body": "In chats with @@Antranig Basman, we are discussing keeping this function data-centric, i.e. having it search based on material that is known to exist in `terms`.  We would add support for deeper references by providing a mechanism to \"flatten\" a deeper structure in to an object with only top-level elements, keyed by EL Path, as in:\n\n```java\nmy.magic.converter({ deep:{  path: \"some text\" } })  // becomes { \"deep.path\": \"some text\" }\n```\n\nWith this structure, \"%deep.path\" would work as expected.  This should minimally impact existing users, as they in essence are already only able to refer to single-segment EL paths within their templates.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-11-14T07:21:02.064-0500",
      "body": "In looking at [the tests for fluid.stringTemplate](https://github.com/fluid-project/infusion/blob/61f29d2051d3557fdac8a68060c51f861ea24cc0/tests/framework-tests/core/js/FluidJSTests.js#L383), I see that we do use arrays and indices, as in:\n\n```java\nfluid.stringTemplate(\"%0\", [\"a value\"]); // returns \"a value\"\n```\n\nIn flattening the terms, we discussed using `fluid.each` on any objects or arrays, such that:\n\n```java\nmy.magic.converter({ array: [1,2,3], object: { deep: \"value\"}});\r\n/* Returns:\r\n{\r\n  \"array.0\": 1,\r\n  \"array.1\": 2,\r\n  \"array.2\": 3,\r\n  \"object.deep\": \"value\"\r\n}\r\n*/\n```\n\nGiven that directly referring to `%object` in a string template results in `[Object object]` at the moment, we can reasonably expect people to only be directly referring to string, number, and boolean values.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-22T05:21:23.416-0500",
      "body": "@@Antranig Basman, now that my previous infusion pull is merged, I am preparing to spike this as we have discussed.  Unless you have new thoughts on the subject, I would follow the approach outlined in the comments above, i.e.:\n\n1. Before iterating through keys in the values supplied to fluid.stringTemplate, the structure would be \"flattened\" as described above.\n2. The rest of the logic would be as before, iterate through the keys in the flattened object in reverse order by length, attempting to replace the longest key possible after the percent sign.&#x20;\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-22T09:25:13.397-0500",
      "body": "<https://github.com/fluid-project/infusion/pull/871>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-01-25T15:18:15.440-0500",
      "body": "I'm greatly interested in progress on this issue, and look forward to being able to make use of it! 🙂\n\nI have a case where I would like to have a reference within an array or object that refers to a value within another array/object that is a sibling of the first. That is to say, some way to indicate that the value I'd like to get is both up a level and then down into a collection in the way you've described.\n\n \n\n```java\n// E.g. the following object...\r\nvar exempliGratia = {\r\n  collectionA: {\r\n    valueA: \"foo\"\r\n  },\r\n  collectionB: {\r\n    valueB: \"%..collectionA.valueA\"\r\n    // This \"..\" notation is something I've just made up, there is likely a more elegant solution\r\n  }\r\n};\r\n\r\n// ... would resolve into:\r\n{\r\n  collectionA: {\r\n    valueA: \"foo\"\r\n  },\r\n  collectionB: {\r\n    valueB: \"foo\"\r\n  }\r\n}\n```\n\n Am I correct in understanding that this functionality is not present in your PR, @@Tony Atkins \\[RtF]?\n\nEdit: after reviewing fluid.flattenObjectPaths, it seems like this may already be available, and I would only make reference to %collectionA.valueA, without any need to go \"up\" the chain first.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-26T04:25:30.141-0500",
      "body": "@@Gregor Moss, the underlying concept of an EL Path does not support this type of \"go up to the parent, then down\" mechanism directly.  However, depending on your context, there may be other options.  For example, in my related i18n work with Handlebars templates, there is always the option to pass a different part of the current context to the handlebars helper, so that although you can only represent \"downward-facing\" material from your currently location using EL Paths, you can choose to start a particular evaluation higher in the context.  Handlebars provides the ability to pass in material relative to where you are, so in that environment you can indeed tree up, then down, you just have to do part of it with Handlebars.\n\nAnyway, if you can give a concrete example, I might be able to advise you further.\n\ncc: @@Antranig Basman\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-26T06:03:08.784-0500",
      "body": "Sorry, I guess I mean context for your example, i.e. what are you using fluid.stringTemplate with that would be expected to make sense of the paths?\n"
    }
  ]
}
---
Currently, `fluid.stringTemplate` only supports a single top-level key within the terms object, as in:

```java
fluid.stringTemplate("%foo.bar", { foo: { bar: "baz" }}); // returns "[object Object].bar"
```

In part to help with [variable handling in i18n message bundles](https://issues.gpii.net/browse/GPII-2444), I would like to improve upon this by:

1. Looking for all valid [EL path](https://docs.fluidproject.org/infusion/development/FrameworkConcepts.html#el-paths) characters to the right of each percent sign.
2. Breaking those down into segments by period characters.
3. Iterate through using the segments as input to fluid.get, lopping off the trailing segment until a match is found (or not).

This would allow deep referencing of material, such that:

```java
fluid.stringTemplate("%foo.bar", { foo: { bar: "baz" }}); // returns "baz"
```

cc: @@Antranig Basman

        