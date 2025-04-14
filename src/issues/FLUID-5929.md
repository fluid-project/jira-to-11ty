---json
{
  "title": "FLUID-5929",
  "summary": "IoC tests exit with no results if jqUnit is not available...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2016-07-20T04:33:16.418-0400",
  "updated": "2024-07-22T09:23:51.760-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-07-20T04:50:49.526-0400",
      "body": "Update, requiring jqUnit resolves this, which is why I don't usually see this.  Usually I have at least one local test function.  Lately I have been able to write more \"pure\" tests that only call existing functions from sequence steps.  It is these that will not work on their own.\n\nMoving this issue to infusion, as it is not a problem with Kettle.  Calling `kettle.loadTestingSupport` just solves the problem because somewhere along the way it requires jqUnit.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-07-20T05:03:09.344-0400",
      "body": "On further investigation, I discovered that the problem is a result of jqUnit.assert not being available as a global variable (makes sense).  I get the same failure if I change the example to use \"bogus\".\n\nSeems like all we need is something to throw a proper error if \"func\" doesn't exist.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2016-07-20T05:05:59.186-0400",
      "body": "Sorry, I keep updating my example to confirm, it looks like even if you don't call a jqUnit function, jqUnit is required.  The framework does correctly throw an error about a bogus function, but only if jqUnit has been required.\n\nHere's an updated example that clearly illustrates the problem:\n\n```java\n/* eslint-env node */\r\n\"use strict\";\r\nvar fluid = require(\"infusion\");\r\nfluid.loadTestingSupport();\r\n\r\n//require(\"node-jqunit\");\r\n\r\nfluid.defaults(\"gpii.tests.wtf.caseHolder\", {\r\n    gradeNames: [\"fluid.test.testCaseHolder\"],\r\n    modules: [{\r\n        name: \"Confirm that things are borderline sane...\",\r\n        tests: [\r\n            {\r\n                name: \"We should be able to run a single test...\",\r\n                type: \"test\",\r\n                sequence: [\r\n                    {   func: \"console.log\", args: [\"Here we are now.\"] }\r\n                ]\r\n            }\r\n        ]\r\n    }]\r\n});\r\n\r\nfluid.defaults(\"gpii.tests.wtf.environment\", {\r\n    gradeNames: [\"fluid.test.testEnvironment\"],\r\n    components: {\r\n        caseHolder: {\r\n            type: \"gpii.tests.wtf.caseHolder\"\r\n        }\r\n    }\r\n});\r\n\r\nfluid.test.runTests(\"gpii.tests.wtf.environment\");\n```\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-07-20T07:17:56.195-0400",
      "body": "Yes, this is a long-standing annoyance. I think it can really only be resolved sensibly by eliminating the annoying node-jqunit module and folding this into Infusion. However, this itself also relies on some kind of \"monorepo\" pattern for Infusion itself so that all these dependencies can be properly isolated within it.\n"
    }
  ]
}
---
I am experiencing some very odd test failures in new tests. Basically the tests are queued but never run.

After much investigation, I discovered that most of my existing tests either require node-jqunit or call something that does that for them, like `kettle.loadTestingSupport` or `gpii.express.loadTestingSupport`.

Here is a simple example that should run on its own, but which does not:

```java
/* eslint-env node */
"use strict";
var fluid = require("infusion");
fluid.loadTestingSupport();

require("node-jqunit"); // Comment this out and the tests will never run.

fluid.defaults("gpii.tests.wtf.caseHolder", {
    gradeNames: ["fluid.test.testCaseHolder"],
    modules: [{
        name: "Confirm that things are borderline sane...",
        tests: [
            {
                name: "We should be able to run a single test...",
                type: "test",
                sequence: [
                    {   func: "jqUnit.assert", args: ["Here we are now."] }
                ]
            }
        ]
    }]
});

fluid.defaults("gpii.tests.wtf.environment", {
    gradeNames: ["fluid.test.testEnvironment"],
    components: {
        caseHolder: {
            type: "gpii.tests.wtf.caseHolder"
        }
    }
});

fluid.test.runTests("gpii.tests.wtf.environment");
```

Although I have this problem in various projects with different versions, here are the versions of node-jqunit and infusion in one project that doesn't work:

```java
"infusion": "2.0.0-dev.20160519T222603Z.754d2c6",
    "node-jqunit": "1.1.4",
```

The workaround for now is to require node-jqunit manually.

        