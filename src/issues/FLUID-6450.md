---json
{
  "title": "FLUID-6450",
  "summary": "IoC references with mangled closing braces should result in a clear error on component startup.",
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
  "date": "2020-01-29T05:14:32.227-0500",
  "updated": "2020-04-15T12:09:44.624-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2020-01-29T05:16:43.363-0500",
      "body": "Note, this was reproduced with the `3.0.0-dev.20191220T163226Z.db83ce0ef.FLUID-6145` dev release.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-04-15T12:09:39.624-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/976) for fixing this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/1280f700cb248ae8c7f5e1d5e0bc2435bc552acd).\n"
    }
  ]
}
---
An IoC reference with a mangled closing brace should be logged as an error on component startup.  Instead, the mangled reference is treated as a string, as in this example:

```java
var fluid = require("infusion");
var my = fluid.registerNamespace("my");

fluid.defaults("my.mangled.invoker", {
    gradeNames: ["fluid.component"],
    intendedTarget: "Here we are!",
    invokers: {
        log: {
            funcName: "console.log",
            args: ["Mangled invoker arg resolves to -> ", "{that].options.intendedTarget"]
        }
    }
});

var mangledInvoker = my.mangled.invoker();
mangledInvoker.log(); // The text of the mangled IoC reference is logged.
```

For more examples, see <https://pastebin.com/cdrhxg1Q>

        