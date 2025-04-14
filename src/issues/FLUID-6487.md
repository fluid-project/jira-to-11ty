---json
{
  "title": "FLUID-6487",
  "summary": "Firefox 75: keyboard-a11y: activate with Enter key: Died on test #5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Giovanni Tirloni",
  "date": "2020-04-09T21:23:18.989-0400",
  "updated": "2020-04-10T08:52:41.182-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6486/",
      "key": "FLUID-6486"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6488/",
      "key": "FLUID-6488",
      "summary": "Keyboard-a11y failure in \"activatable\" on Firefox and Fedora"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Firefox 75

```
not ok 14 Firefox 75.0 - [576 ms] - Framework Tests: /tests/framework-tests/core/html/Keyboard-a11y-test.html
    ---
        stack: >
            runLoggingCallbacks@http://localhost:7357/tests/lib/qunit/js/qunit.js:1611:19
            pushFailure@http://localhost:7357/tests/lib/qunit/js/qunit.js:998:22
            run@http://localhost:7357/tests/lib/qunit/js/qunit.js:212:10
            run/<@http://localhost:7357/tests/lib/qunit/js/qunit.js:366:10
            process@http://localhost:7357/tests/lib/qunit/js/qunit.js:1459:24
            start/<@http://localhost:7357/tests/lib/qunit/js/qunit.js:484:12
            
        message: >
            keyboard-a11y: activate with Enter key: Died on test #5 @http://localhost:7357/tests/framework-tests/core/js/Keyboard-a11yTests.js:419:12
            @http://localhost:7357/tests/framework-tests/core/js/Keyboard-a11yTests.js:607:3
            : Operation is not supported
        Log: |
    ...
```

        