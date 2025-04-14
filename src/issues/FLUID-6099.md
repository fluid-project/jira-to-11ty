---json
{
  "title": "FLUID-6099",
  "summary": "The IoC testing framework should log a warning or failure if a test specification is malformed ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2016-12-18T12:19:51.828-0500",
  "updated": "2016-12-18T19:01:24.182-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6097/",
      "key": "FLUID-6097"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-12-18T19:01:24.182-0500",
      "body": "See also <https://fluidproject.atlassian.net/browse/FLUID-6097#icft=FLUID-6097> for an IoC testing framework diagnostics improvement\n"
    }
  ]
}
---
It's easy to accidentally create a fluid.test.testCaseHolder "modules" specification structure that isn't quite properly formed. I accidentally wrote something like this, for example, where I omitted the "tests" block:

```java
fluid.defaults("flock.test.badTester", {
    gradeNames: "fluid.test.testCaseHolder,

    modules: [
        {
             sequence: [
                 {
                     func: "QUnit.ok",
                     args: [true]
                 }
             ]
        }
    ]
});
```

In this case, no errors or warnings are raised, and the test case passes with "0 of 0 tests run."

Perhaps one option, instead, is to fail in the case that we encounter no tests? Or provide some kind of validation for test specifications? This is obviously a case of user error, but would be helpful to provide them with some guidance if we can.

        