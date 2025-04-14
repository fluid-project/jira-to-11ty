---json
{
  "title": "FLUID-6097",
  "summary": "IoC testing framework fails with unhelpful error message if \"sequenceElements\" property is not set in fluid.test.sequence",
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
  "date": "2016-12-16T15:08:53.985-0500",
  "updated": "2016-12-18T19:01:24.009-0500",
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
      "url": "/browse/FLUID-6099/",
      "key": "FLUID-6099",
      "summary": "The IoC testing framework should log a warning or failure if a test specification is malformed "
    }
  ],
  "attachments": [],
  "comments": []
}
---
As reported on <https://github.com/fluid-project/infusion-docs/pull/103#discussion_r92627783> , if the required option "sequenceElements" is omitted from one of the new-style FLUID-5903 grade budding sequences, there is an unhelpful diagostic:&#x20;

```java
16:13:29.838:  jq: FAIL: Module "Priority-driven grade budding" Test name "Simple sequence of 4 active elements" - Message: Died on test #1     at Object.asyncTest (/Users/duhrer/Source/rtf/ul-image-api/node_modules/infusion/tests/lib/qunit/js/qunit.js:405:9): Cannot set property 'sequence' of undefined
16:13:29.838:  jq: Source: TypeError: Cannot set property 'sequence' of undefined
    at Object.fluid.test.resolveSequence (/Users/duhrer/Source/rtf/ul-image-api/node_modules/infusion/tests/test-core/utils/js/IoCTestUtils.js:498:31)
    at Object.fluid.test.sequenceExecutor (/Users/duhrer/Source/rtf/ul-image-api/node_modules/infusion/tests/test-core/utils/js/IoCTestUtils.js:509:49)
    at Object.testFunc (/Users/duhrer/Source/rtf/ul-image-api/node_modules/infusion/tests/test-core/utils/js/IoCTestUtils.js:630:32)
16:13:29.856:  jq: Test concluded - Module "Priority-driven grade budding" Test name "Simple sequence of 4 active elements": 0/1 passed - FAIL
```

We should make an explicit check with a diagnostic, although with our authoring support in the works it is about time to start considering a generic schema-driven validation scheme for grade contents - we are accumulating a lot of grades with "must be overridden" elements, for which the "fluid.notImplemented" scheme for invokers is an inadequate and special-cased representative.

        