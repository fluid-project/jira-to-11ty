---json
{
  "title": "FLUID-6217",
  "summary": "`fluid.get` returns the parent value inappropriately when the parent value is \"falsy\"...",
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
  "date": "2017-10-30T10:21:13.672-0400",
  "updated": "2024-07-22T09:01:41.003-0400",
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
      "author": "Cindy Li",
      "date": "2017-11-02T15:17:01.497-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/858) has been merged into the project repo master branch at c0636b395d691e986dd539c804fef78b799f7240\n"
    }
  ]
}
---
If a parent value is "falsy", `fluid.get` will return the parent value instead of `undefined` when an attempt is made to locate a child value.

```java
fluid.get([0,1,2],"0.value"); // returns 0
fluid.get([0,1,2],"0.any.path.at.all"); // returns 0
fluid.get([0, false, 2],"1.foo.bar.baz"); // returns false
fluid.get({foo:false}, "foo.bar.baz"); // returns false
```

The expected value for each of these cases is `undefined`.

        